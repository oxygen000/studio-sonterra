import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '../../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// الاتصال بقاعدة البيانات
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      serverSelectionTimeoutMS: 30000, // زيادة وقت المهلة إلى 30 ثانية
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// تعريف واجهة بيانات تسجيل الدخول
interface LoginData {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    // الاتصال بقاعدة البيانات
    await connectDB();

    // استخراج البيانات من الطلب
    const { email, password }: LoginData = await req.json();

    console.log("Received login data:", { email });

    // التحقق من وجود البريد الإلكتروني وكلمة المرور
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    // البحث عن المستخدم في قاعدة البيانات
    const user = await User.findOne({ email });

    // التحقق من وجود المستخدم
    if (!user) {
      return NextResponse.json(
        { message: 'User not found.' },
        { status: 404 }
      );
    }

    // التحقق من صحة كلمة المرور
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid password.' },
        { status: 400 }
      );
    }

    // إنشاء رمز وصول (JWT)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!, // مفتاح سري لتوقيع الرمز
      { expiresIn: '1h' } // انتهاء صلاحية الرمز بعد ساعة
    );

    // إنشاء استجابة مع الـ Token وبيانات المستخدم
    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
        },
      },
      { status: 200 }
    );

    // تعيين الـ Token في الكوكيز
    response.cookies.set('token', token, {
      httpOnly: true, // لجعل الكوكيز غير قابلة للوصول عبر JavaScript في المتصفح
      secure: process.env.NODE_ENV === 'production', // استخدام Secure في الإنتاج
      maxAge: 3600, // انتهاء الصلاحية بعد ساعة (مطابق لانتهاء صلاحية الـ Token)
      sameSite: 'strict', // لمنع هجمات CSRF
      path: '/', // جعل الكوكيز متاحة لجميع المسارات
    });

    return response;
  } catch (error: unknown) {
    console.error('Login error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: 'An error occurred. Please try again.' },
        { status: 500 }
      );
    }
  }
}