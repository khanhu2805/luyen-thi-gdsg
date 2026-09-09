import { NextRequest, NextResponse } from 'next/server';
import { getRegistration, updatePayment } from '@/app/lib/google-sheet';
import { parseVnpayParams, verifyVnpaySignature } from '@/app/lib/vnpay';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function ipnResponse(RspCode: string, Message: string) {
  return NextResponse.json(
    { RspCode, Message },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    },
  );
}

export async function GET(request: NextRequest) {
  try {
    const params = parseVnpayParams(request.nextUrl.searchParams);

    // 1) Luôn kiểm tra checksum trước mọi thao tác DB.
    if (!verifyVnpaySignature(params)) {
      return ipnResponse('97', 'Invalid Checksum');
    }

    const orderId = params.vnp_TxnRef || '';

    // 2) Kiểm tra đơn hàng.
    const registration = await getRegistration(orderId);
    if (!registration) {
      return ipnResponse('01', 'Order not found');
    }

    // 3) VNPAY trả amount đã nhân 100.
    const paidAmount = Number(params.vnp_Amount || '0') / 100;
    if (paidAmount !== Number(registration.amount)) {
      return ipnResponse('04', 'Invalid Amount');
    }

    // 4) Nếu đơn đã confirm trước đó, báo 02.
    if (registration.status === 'PAID' || registration.status === 'PAYMENT_FAILED') {
      return ipnResponse('02', 'Order already confirmed');
    }

    // 5) RspCode của Merchant là trạng thái GHI NHẬN IPN,
    // không phải trạng thái thanh toán của khách hàng.
    const paymentSuccess =
      params.vnp_ResponseCode === '00' &&
      params.vnp_TransactionStatus === '00';

    await updatePayment(orderId, {
      status: paymentSuccess ? 'PAID' : 'PAYMENT_FAILED',
      vnpTransactionNo: params.vnp_TransactionNo || '',
      vnpResponseCode: params.vnp_ResponseCode || '',
      vnpTransactionStatus: params.vnp_TransactionStatus || '',
      vnpBankCode: params.vnp_BankCode || '',
      vnpPayDate: params.vnp_PayDate || '',
    });

    // Dù giao dịch thành công hay thất bại, nếu Merchant đã ghi nhận được
    // kết quả vào DB thì phải trả 00 cho VNPAY.
    return ipnResponse('00', 'Confirm Success');
  } catch (error) {
    console.error('VNPAY IPN error:', error);
    return ipnResponse('99', 'Unknown error');
  }
}
