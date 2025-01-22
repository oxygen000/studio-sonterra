// src/app/api/user/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import User from '../../../models/User';

export async function GET(request: Request) {
    await connectDB();
  
    try {
      // جلب بيانات المستخدم (مثال: أول مستخدم في القاعدة)
      const user = await User.findOne({});
  
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }