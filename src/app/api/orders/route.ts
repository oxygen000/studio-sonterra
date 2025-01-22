// src/app/api/orders/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Order from '../../../models/Order';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    // جلب طلبات المستخدم
    const orders = await Order.find({ userId });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}