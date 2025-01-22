import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '../../../models/User';

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

interface RegistrationError {
  message: string;
  errors?: Record<string, string>;
}

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// التحقق من البيانات المدخلة
const validateRegistrationData = (data: UserData): void => {
  const lettersOnly = /^[A-Za-z\s]+$/; // السماح بالأحرف والمسافات فقط

  // التحقق من أن firstname يحتوي فقط على أحرف ومسافات
  if (!data.firstname || !lettersOnly.test(data.firstname)) {
    throw new Error('Firstname can only contain letters and spaces.');
  }

  // التحقق من أن lastname يحتوي فقط على أحرف ومسافات
  if (!data.lastname || !lettersOnly.test(data.lastname)) {
    throw new Error('Lastname can only contain letters and spaces.');
  }

  // التحقق من وجود تأكيد كلمة المرور
  if (!data.confirmPassword) {
    throw new Error('Confirm password is required.');
  }

  // التحقق من تطابق كلمة المرور وتأكيدها
  if (data.password !== data.confirmPassword) {
    throw new Error('Password and confirm password do not match.');
  }

  // التحقق من أن كلمة المرور تتوافق مع الشروط
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  if (!passwordRegex.test(data.password)) {
    throw new Error('Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character.');
  }
};

export async function POST(req: Request) {
  try {
    // الاتصال بقاعدة البيانات
    await connectDB();

    const { firstname, lastname, email, phone, password, confirmPassword } = await req.json();

    console.log("Received data:", { firstname, lastname, email, phone, password, confirmPassword });

    if (!firstname || !lastname || !email || !phone || !password || !confirmPassword) {
      throw new Error('Missing required fields');
    }

    const userData: UserData = { firstname, lastname, email, phone, password, confirmPassword };
    validateRegistrationData(userData);

    const newUser = new User({
      firstname,
      lastname,
      email,
      phone,
      password,
      confirmPassword, // سيتم حذف confirmPassword لاحقًا
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error: unknown) {
    console.error('Registration error:', error);

    if (error instanceof Error) {
      const registrationError: RegistrationError = {
        message: error.message,
        errors: (error as { errors?: Record<string, string> }).errors, // استخدام نوع محدد بدلاً من any
      };
      return NextResponse.json({ message: registrationError.message, errors: registrationError.errors }, { status: 400 });
    } else {
      return NextResponse.json({ message: 'Registration error', errors: 'An unknown error occurred.' }, { status: 400 });
    }
  }
}