import crypto from 'crypto';

export type VnpayParams = Record<string, string>;

function cleanEnv(value: string | undefined) {
  return (value || '').trim().replace(/^['"]|['"]$/g, '');
}

function encodeVnp(value: string) {
  return encodeURIComponent(value).replace(/%20/g, '+');
}

/**
 * Chuỗi ký theo quy tắc VNPAY 2.1.0:
 * - Chỉ lấy tham số vnp_*
 * - Loại vnp_SecureHash và vnp_SecureHashType
 * - Sắp xếp key tăng dần
 * - URL encode value, thay %20 bằng +
 * - KHÔNG tự ý bỏ tham số có giá trị rỗng nếu VNPAY đã gửi nó sang
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

  const a = Buffer.from(receivedHash, 'utf8');
  const b = Buffer.from(expectedHash, 'utf8');

  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
