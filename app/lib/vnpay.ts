import crypto from "crypto";

export type VnpayParams = Record<string, string>;

function encodeVnpValue(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

function canonicalQuery(params: VnpayParams) {
  return Object.keys(params)
    .sort()
    .filter((key) => params[key] !== "")
    .map((key) => `${key}=${encodeVnpValue(params[key])}`)
    .join("&");
}

export function hmacSha512(secret: string, data: string) {
  return crypto.createHmac("sha512", secret).update(data, "utf8").digest("hex");
}

export function formatVnpayDate(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${map.year}${map.month}${map.day}${map.hour}${map.minute}${map.second}`;
}

export function createVnpayPaymentUrl(input: {
  orderId: string;
  amount: number;
  orderInfo: string;
  ipAddress: string;
  returnUrl: string;
}) {
  const tmnCode = process.env.VNP_TMN_CODE;
  const hashSecret = process.env.VNP_HASH_SECRET;
  const paymentUrl =
    process.env.VNP_PAYMENT_URL ||
    "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

  if (!tmnCode || !hashSecret) {
    throw new Error("Thiếu VNP_TMN_CODE hoặc VNP_HASH_SECRET.");
  }

  const now = new Date();
  const expire = new Date(now.getTime() + 15 * 60 * 1000);

  const bankCode = process.env.VNP_BANK_CODE?.trim();

  const params: VnpayParams = {
    vnp_Version: "2.1.0",
    vnp_Command: "pay",
    vnp_TmnCode: tmnCode,
    vnp_Amount: String(Math.round(input.amount * 100)),
    vnp_CreateDate: formatVnpayDate(now),
    vnp_CurrCode: "VND",
    vnp_ExpireDate: formatVnpayDate(expire),
    vnp_IpAddr: input.ipAddress || "127.0.0.1",
    vnp_Locale: "vn",
    vnp_OrderInfo: input.orderInfo,
    vnp_OrderType: "other",
    vnp_ReturnUrl: input.returnUrl,
    vnp_TxnRef: input.orderId,
  };

  if (bankCode) {
    params.vnp_BankCode = bankCode;
  }

  const signData = canonicalQuery(params);
  const secureHash = hmacSha512(hashSecret, signData);

  return `${paymentUrl}?${signData}&vnp_SecureHash=${secureHash}`;
}

export function parseVnpayParams(searchParams: URLSearchParams) {
  const params: VnpayParams = {};

  searchParams.forEach((value, key) => {
    if (key.startsWith("vnp_")) {
      params[key] = value;
    }
  });

  return params;
}

export function verifyVnpaySignature(params: VnpayParams) {
  const hashSecret = process.env.VNP_HASH_SECRET;

  if (!hashSecret) {
    throw new Error("Thiếu VNP_HASH_SECRET.");
  }

  const receivedHash = params.vnp_SecureHash;
  if (!receivedHash) return false;

  const cleanParams = { ...params };
  delete cleanParams.vnp_SecureHash;
  delete cleanParams.vnp_SecureHashType;

  const expectedHash = hmacSha512(hashSecret, canonicalQuery(cleanParams));

  const a = Buffer.from(receivedHash.toLowerCase(), "utf8");
  const b = Buffer.from(expectedHash.toLowerCase(), "utf8");

  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function extractClientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() || headers.get("x-real-ip") || "127.0.0.1";
  return ip.replace("::ffff:", "");
}

export function makeOrderId() {
  const random = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `GDSG${Date.now()}${random}`;
}
