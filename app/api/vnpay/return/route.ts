import { NextRequest, NextResponse } from 'next/server';
import { getRegistration } from '@/app/lib/google-sheet';
import {
  parseVnpayParams,
  verifyVnpaySignature,
} from '@/app/lib/vnpay';

export const runtime = 'nodejs';

function resultUrl(
  request: NextRequest,
  status: 'success' | 'failed' | 'invalid',
  orderId: string,
) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    request.nextUrl.origin;

  const url = new URL('/thanh-toan/ket-qua', siteUrl);
  url.searchParams.set('status', status);
  if (orderId) url.searchParams.set('orderId', orderId);
  return url;
}

export async function GET(request: NextRequest) {
  try {
    const params = parseVnpayParams(request.nextUrl.searchParams);
    const orderId = params.vnp_TxnRef || '';

    if (!verifyVnpaySignature(params)) {
      return NextResponse.redirect(resultUrl(request, 'invalid', orderId));
    }

    const registration = await getRegistration(orderId);
    if (!registration) {
      return NextResponse.redirect(resultUrl(request, 'invalid', orderId));
    }

    const paidAmount = Number(params.vnp_Amount || '0') / 100;
    if (paidAmount !== Number(registration.amount)) {
      return NextResponse.redirect(resultUrl(request, 'invalid', orderId));
    }

    const success =
      params.vnp_ResponseCode === '00' &&
      params.vnp_TransactionStatus === '00';

    // Theo đặc tả VNPAY: Return URL chỉ xác minh checksum và hiển thị kết quả.
    // Trạng thái đơn hàng được cập nhật tại IPN URL (server-to-server).
    return NextResponse.redirect(
      resultUrl(request, success ? 'success' : 'failed', orderId),
    );
  } catch (error) {
    console.error('VNPAY return error:', error);
    return NextResponse.redirect(resultUrl(request, 'invalid', ''));
  }
}
