import { NextRequest, NextResponse } from 'next/server';
import {
  getRegistration,
  updatePayment,
} from '@/app/lib/google-sheet';
import {
  parseVnpayParams,
  verifyVnpaySignature,
} from '@/app/lib/vnpay';

export const runtime = 'nodejs';

function ipnResponse(RspCode: string, Message: string) {
  return NextResponse.json({ RspCode, Message });
}

export async function GET(request: NextRequest) {
  try {
    const params = parseVnpayParams(request.nextUrl.searchParams);

    if (!verifyVnpaySignature(params)) {
      return ipnResponse('97', 'Invalid Checksum');
    }

    const orderId = params.vnp_TxnRef;
    const registration = await getRegistration(orderId);

    if (!registration) {
      return ipnResponse('01', 'Order not found');
    }

    const paidAmount = Number(params.vnp_Amount || '0') / 100;

    if (paidAmount !== Number(registration.amount)) {
      return ipnResponse('04', 'Invalid Amount');
    }

    if (registration.status === 'PAID') {
      return ipnResponse('02', 'Order already confirmed');
    }

    const success =
      params.vnp_ResponseCode === '00' &&
      params.vnp_TransactionStatus === '00';

    await updatePayment(orderId, {
      status: success ? 'PAID' : 'PAYMENT_FAILED',
      vnpTransactionNo: params.vnp_TransactionNo || '',
      vnpResponseCode: params.vnp_ResponseCode || '',
      vnpTransactionStatus: params.vnp_TransactionStatus || '',
      vnpBankCode: params.vnp_BankCode || '',
      vnpPayDate: params.vnp_PayDate || '',
    });

    return ipnResponse('00', 'Confirm Success');
  } catch (error) {
    console.error('VNPAY IPN error:', error);
    return ipnResponse('99', 'Unknown error');
  }
}
