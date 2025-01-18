import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // التحقق من بيانات تسجيل الدخول
  if (email === "admin@admin.com" && password === "admin123") {
    const res = NextResponse.json({ success: true });

    // تعيين الكوكيز مع إعدادات الأمان
    const expires = new Date(Date.now() + 3600 * 1000); // التوكن ينتهي بعد ساعة (يمكنك تعديل الوقت)
    res.cookies.set("token", "admin-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // إرسال الكوكيز عبر HTTPS فقط في بيئة الإنتاج
      expires: expires, // تعيين وقت انتهاء الكوكيز
      path: "/", // تحديد المسار ليكون متاحًا لجميع المسارات
    });

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
