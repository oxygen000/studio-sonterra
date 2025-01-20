import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/db';  // تأكد من أنك قد أنشأت اتصال مع MongoDB في lib/dbConnect.ts
import Product from '../../../../models/Product';  // تأكد من أن لديك نموذج المنتج في models/Product.ts

// POST - إضافة منتج
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { name, price, description, category, stock, image } = await req.json();
    
    console.log("Received data:", { name, price, description, category, stock, image });

    if (!name || !price || !category) {
      return NextResponse.json({ message: "Name, Price, and Category are required!" }, { status: 400 });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      category,
      stock,
      image,
    });

    await newProduct.save();

    return NextResponse.json({ message: "Product added successfully!", product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: "Failed to add product, please try again." }, { status: 500 });
  }
}


// GET - لاسترجاع المنتجات
export async function GET(req: NextRequest) {
  try {
    await dbConnect();  // تأكد من أنك متصل بـ MongoDB
    
    const products = await Product.find({});  // استرجاع جميع المنتجات

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "Failed to fetch products, please try again." }, { status: 500 });
  }
}
