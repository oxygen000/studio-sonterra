import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import  connectToDB  from '../../../lib/db';
import User from '../../../models/User';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // الاتصال بقاعدة البيانات
    await connectToDB();

    // التحقق من وجود المستخدم مسبقًا
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء مستخدم جديد
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
  }
}
