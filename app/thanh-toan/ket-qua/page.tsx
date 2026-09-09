import Link from 'next/link';

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function PaymentResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const orderId = Array.isArray(params.orderId) ? params.orderId[0] : params.orderId;

  const success = status === 'success';
  const invalid = status === 'invalid';

  const title = success
    ? 'Thanh toán thành công'
    : invalid
      ? 'Không thể xác minh giao dịch'
      : 'Thanh toán chưa thành công';

  const description = success
    ? 'Trung tâm đã ghi nhận đăng ký. Thông tin lớp học sẽ được gửi tới phụ huynh qua email hoặc số điện thoại đã đăng ký.'
    : invalid
      ? 'Dữ liệu trả về không hợp lệ hoặc không khớp với đơn đăng ký. Vui lòng liên hệ trung tâm và cung cấp mã đơn để được kiểm tra.'
      : 'Giao dịch chưa hoàn tất. Phụ huynh có thể quay lại đăng ký hoặc liên hệ trung tâm để được hỗ trợ.';

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        padding: '48px 20px',
        background: '#f4f7fe',
        fontFamily: 'var(--font-nunito), sans-serif',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 720,
          background: '#fff',
          borderRadius: 28,
          padding: '44px 32px',
          boxShadow: '0 20px 50px rgba(31,42,74,.10)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 56, marginBottom: 12 }}>
          {success ? '✅' : invalid ? '⚠️' : '❌'}
        </div>
        <h1 style={{ margin: 0, color: '#1a237e', fontSize: 34 }}>{title}</h1>
        <p style={{ color: '#546e7a', fontSize: 18, lineHeight: 1.7 }}>
          {description}
        </p>
        {orderId && (
          <p style={{ color: '#263238', fontWeight: 800 }}>
            Mã đăng ký: {orderId}
          </p>
        )}
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 28,
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              background: '#1976d2',
              color: '#fff',
              padding: '13px 22px',
              borderRadius: 999,
              fontWeight: 800,
            }}
          >
            Về trang chủ
          </Link>
          {!success && (
            <Link
              href="/#form-dang-ky"
              style={{
                textDecoration: 'none',
                border: '2px solid #1976d2',
                color: '#1976d2',
                padding: '11px 22px',
                borderRadius: 999,
                fontWeight: 800,
              }}
            >
              Đăng ký lại
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
