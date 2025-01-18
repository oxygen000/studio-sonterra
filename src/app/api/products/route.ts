import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

// التأكد من أن MONGO_URL يتم تحميله بشكل صحيح من .env
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error('متغير البيئة MONGO_URL غير موجود في ملف .env');
}

// إعداد الاتصال بقاعدة البيانات
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// دالة لجلب المنتجات
export async function GET() {
  try {
    // الاتصال بقاعدة البيانات
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGO_URL);
    }

    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('حدث خطأ أثناء الاتصال بقاعدة البيانات:', error);
    return NextResponse.json({ message: 'حدث خطأ أثناء جلب البيانات' }, { status: 500 });
  }
}
