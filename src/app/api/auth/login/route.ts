import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // التحقق من بيانات تسجيل الدخول
  if (email === "admin@admin.com" && password === "admin123") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("token", "admin-token", { httpOnly: true });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
