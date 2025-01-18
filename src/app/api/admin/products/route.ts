// /pages/api/products.ts
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import Product from "../../../../models/Product";

// معالجة طلب POST
export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json(); // قراءة بيانات المنتج من الطلب
    const newProduct = await Product.create(body); // إنشاء المنتج في قاعدة البيانات
    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ success: false, error: "Failed to add product" }, { status: 500 });
  }
}

// معالجة طلب GET (للحصول على جميع المنتجات)
export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find(); // جلب جميع المنتجات
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}
