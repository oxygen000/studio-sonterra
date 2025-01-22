// src/app/api/orders/update/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Order from '../../../../models/Order';

export async function PUT(request: Request) {
    await connectDB();
  
    try {
      const { orderId, status, userId } = await request.json();
  
      if (!orderId || !status || !userId) {
        return NextResponse.json(
          { error: 'Order ID, status, and user ID are required' },
          { status: 400 }
        );
      }
  
      // التحقق من أن الطلب يخص المستخدم
      const order = await Order.findOne({ _id: orderId, userId });
  
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found or does not belong to the user' },
          { status: 404 }
        );
      }
  
      // تحديث حالة الطلب
      order.status = status;
      await order.save();
  
      return NextResponse.json(order);
    } catch (error) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }