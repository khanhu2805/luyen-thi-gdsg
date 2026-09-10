import crypto from 'crypto';

export type VnpayParams = Record<string, string>;

function cleanEnv(value: string | undefined) {
  return (value || '').trim().replace(/^['"]|['"]$/g, '');
}

function encodeVnp(value: string) {
  return encodeURIComponent(value).replace(/%20/g, '+');
}

/**
 * Tạo chuỗi ký theo VNPAY 2.1.0:
 * - chỉ lấy tham số vnp_*
 * - bỏ vnp_SecureHash và vnp_SecureHashType
 * - sắp xếp key tăng dần
 * - URL encode key/value và thay %20 bằng +
 */
export function buildVnpaySignData(params: VnpayParams) {
  return Object.keys(params)
    .filter(
      (key) =>
        key.startsWith('vnp_') &&
        key !== 'vnp_SecureHash' &&
        key !== 'vnp_SecureHashType',
    )
    .sort()
    .map((key) => `${encodeVnp(key)}=${encodeVnp(params[key] ?? '')}`)
    .join('&');
}

export function hmacSha512(secret: string, data: string) {
  return crypto
    .createHmac('sha512', secret)
    .update(Buffer.from(data, 'utf8'))
    .digest('hex');
}

export function formatVnpayDate(date: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);

  const map = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  ) as Record<string, string>;

  return `${map.year}${map.month}${map.day}${map.hour}${map.minute}${map.second}`;
}

function normalizeOrderInfo(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 255);
}

export function createVnpayPaymentUrl(input: {
  orderId: string;
  amount: number;
  orderInfo: string;
  ipAddress: string;
  returnUrl: string;
}) {
  const tmnCode = cleanEnv(process.env.VNP_TMN_CODE);
  const hashSecret = cleanEnv(process.env.VNP_HASH_SECRET);
  const paymentUrl =
    cleanEnv(process.env.VNP_PAYMENT_URL) ||
    'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
  const bankCode = cleanEnv(process.env.VNP_BANK_CODE);

  if (!tmnCode || !hashSecret) {
    throw new Error('Thiếu VNP_TMN_CODE hoặc VNP_HASH_SECRET.');
  }

  if (!/^[A-Za-z0-9]{8}$/.test(tmnCode)) {
    throw new Error('VNP_TMN_CODE phải gồm đúng 8 ký tự chữ/số.');
  }

  if (!Number.isFinite(input.amount) || input.amount <= 0) {
    throw new Error('Số tiền VNPAY không hợp lệ.');
  }

  const now = new Date();
  const expire = new Date(now.getTime() + 15 * 60 * 1000);

  const params: VnpayParams = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode: tmnCode,
    vnp_Amount: String(Math.round(input.amount * 100)),
    vnp_CreateDate: formatVnpayDate(now),
    vnp_CurrCode: 'VND',
    vnp_ExpireDate: formatVnpayDate(expire),
    vnp_IpAddr: input.ipAddress || '127.0.0.1',
    vnp_Locale: 'vn',
    vnp_OrderInfo: normalizeOrderInfo(input.orderInfo),
    vnp_OrderType: 'other',
    vnp_ReturnUrl: input.returnUrl,
    vnp_TxnRef: input.orderId,
  };

  // Để trống VNP_BANK_CODE để VNPAY hiển thị màn hình chọn phương thức.
  // Chỉ đặt VNPAYQR nếu Terminal Sandbox của bạn đã được bật QR.
  if (bankCode) {
    params.vnp_BankCode = bankCode;
  }

  const signData = buildVnpaySignData(params);
  const secureHash = hmacSha512(hashSecret, signData);

  if (process.env.NODE_ENV !== 'production' || process.env.VNP_DEBUG === 'true') {
    console.info('VNPAY create payment', {
      paymentUrl,
      bankCode: bankCode || '(not set)',
      tmnCode,
      amount: params.vnp_Amount,
      txnRef: params.vnp_TxnRef,
      createDate: params.vnp_CreateDate,
      expireDate: params.vnp_ExpireDate,
      ipAddress: params.vnp_IpAddr,
      returnUrl: params.vnp_ReturnUrl,
      orderInfo: params.vnp_OrderInfo,
    });
  }

  return `${paymentUrl}?${signData}&vnp_SecureHash=${secureHash}`;
}

export function parseVnpayParams(searchParams: URLSearchParams) {
  const params: VnpayParams = {};

  searchParams.forEach((value, key) => {
    if (key.startsWith('vnp_')) {
      params[key] = value;
    }
  });

  return params;
}

export function verifyVnpaySignature(params: VnpayParams) {
  const hashSecret = cleanEnv(process.env.VNP_HASH_SECRET);
  const configuredTmnCode = cleanEnv(process.env.VNP_TMN_CODE);

  if (!hashSecret) {
    throw new Error('Thiếu VNP_HASH_SECRET.');
  }

  if (
    configuredTmnCode &&
    params.vnp_TmnCode &&
    params.vnp_TmnCode !== configuredTmnCode
  ) {
    if (process.env.VNP_DEBUG === 'true') {
      console.error('VNPAY checksum: TmnCode mismatch', {
        incomingTmnCode: params.vnp_TmnCode,
        configuredTmnCode,
        txnRef: params.vnp_TxnRef,
      });
    }
    return false;
  }

  const receivedHash = (params.vnp_SecureHash || '').trim().toLowerCase();

  if (!receivedHash) {
    if (process.env.VNP_DEBUG === 'true') {
      console.error('VNPAY checksum: missing vnp_SecureHash', {
        incomingTmnCode: params.vnp_TmnCode,
        configuredTmnCode,
        txnRef: params.vnp_TxnRef,
      });
    }
    return false;
  }

  const signData = buildVnpaySignData(params);
  const expectedHash = hmacSha512(hashSecret, signData).toLowerCase();

  if (process.env.VNP_DEBUG === 'true') {
    console.info('VNPAY checksum debug', {
      incomingTmnCode: params.vnp_TmnCode,
      configuredTmnCode,
      txnRef: params.vnp_TxnRef,
      signData,
      receivedHashLength: receivedHash.length,
      expectedHashLength: expectedHash.length,
      receivedHashPrefix: receivedHash.slice(0, 12),
      expectedHashPrefix: expectedHash.slice(0, 12),
      tmnCodeMatches:
        !configuredTmnCode || params.vnp_TmnCode === configuredTmnCode,
    });
  }

  const received = Buffer.from(receivedHash, 'utf8');
  const expected = Buffer.from(expectedHash, 'utf8');

  return (
    received.length === expected.length &&
    crypto.timingSafeEqual(received, expected)
  );
}

export function extractClientIp(headers: Headers) {
  const forwarded = headers.get('x-forwarded-for');
  const raw =
    forwarded?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    '127.0.0.1';

  return raw.replace('::ffff:', '').slice(0, 45);
}

export function makeOrderId() {
  const random = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `GDSG${Date.now()}${random}`;
}
