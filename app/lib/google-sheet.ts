type SheetAction =
  | 'createRegistration'
  | 'getRegistration'
  | 'updatePayment';

type SheetResponse<T = unknown> = {
  ok: boolean;
  message?: string;
  data?: T;
};

function getSheetConfig() {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  const token = process.env.GOOGLE_APPS_SCRIPT_TOKEN;

  if (!url || !token) {
    throw new Error('Thiếu GOOGLE_APPS_SCRIPT_URL hoặc GOOGLE_APPS_SCRIPT_TOKEN.');
  }

  return { url, token };
}

export async function sheetRequest<T>(
  action: SheetAction,
  data: Record<string, unknown>,
): Promise<T> {
  const { url, token } = getSheetConfig();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      action,
      data,
    }),
    cache: 'no-store',
    redirect: 'follow',
  });

  const text = await response.text();

  let payload: SheetResponse<T>;
  try {
    payload = JSON.parse(text) as SheetResponse<T>;
  } catch {
    throw new Error('Google Apps Script trả về dữ liệu không hợp lệ.');
  }

  if (!response.ok || !payload.ok) {
    throw new Error(payload.message || 'Không thể ghi dữ liệu vào Google Sheet.');
  }

  return payload.data as T;
}

export type StoredRegistration = {
  orderId: string;
  type: 'consultation' | 'registration';
  studentName: string;
  studentEmail: string;
  grade: string;
  school: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  courseId: string;
  courseName: string;
  teacherName: string;
  scheduleId: string;
  scheduleLabel: string;
  desiredSchedule: string;
  amount: number;
  status: string;
  note: string;
};

export async function createRegistration(data: StoredRegistration) {
  return sheetRequest<{ orderId: string }>('createRegistration', data);
}

export async function getRegistration(orderId: string) {
  return sheetRequest<StoredRegistration | null>('getRegistration', { orderId });
}

export async function updatePayment(
  orderId: string,
  data: Record<string, unknown>,
) {
  return sheetRequest<{ orderId: string }>('updatePayment', {
    orderId,
    ...data,
  });
}
