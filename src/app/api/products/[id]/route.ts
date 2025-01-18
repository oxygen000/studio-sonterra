import { NextResponse } from "next/server";
import Product from "../../../../models/Product"; // استيراد نموذج المنتج
import dbconnect from "../../../../lib/db"; // استيراد ملف الاتصال بقاعدة البيانات


export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
      await dbconnect(); // تأكد من الاتصال بقاعدة البيانات
  
      // هنا ننتظر params.id
      const { id } = await params;  // التأكد من استخدام await على params
  
      if (!id) {
        return NextResponse.json({ error: 'Product ID is missing' }, { status: 400 });
      }
  
      // البحث عن المنتج في قاعدة البيانات باستخدام المعرف
      const product = await Product.findById(id);
  
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
  
      // إرجاع المنتج عند إيجاده
      return NextResponse.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
  }
