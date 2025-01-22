// src/app/api/addresses/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Address from '../../../models/Address';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const addresses = await Address.find({ userId });
    return NextResponse.json(addresses);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
export async function POST(request: Request) {
    await connectDB();
  
    try {
      const { name, address, userId } = await request.json();
  
      if (!name || !address || !userId) {
        return NextResponse.json(
          { error: 'Name, address, and user ID are required' },
          { status: 400 }
        );
      }
  
      const newAddress = new Address({ name, address, userId });
      await newAddress.save();
  
      return NextResponse.json(newAddress);
    } catch (error) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }