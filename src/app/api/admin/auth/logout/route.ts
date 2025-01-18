import { NextResponse } from "next/server";

// تحديد dynamic و revalidate للمسار
export const dynamic = "force-static";  // أو يمكنك استخدام "force-dynamic" حسب الحاجة
export const revalidate = false;  // إذا كنت لا تريد إعادة التحقق من المسار بشكل دوري

export async function GET() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete("token"); // حذف الكوكيز (تسجيل الخروج)
  return res;
}
