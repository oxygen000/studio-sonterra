import  { Schema, model, models } from "mongoose";



const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    category: { type: String, required: true, trim: true},
    stock: { type: Number, default: 0, min: 0 },
    image: { type: String, trim: true },
  },
  { timestamps: true } // إضافة createdAt و updatedAt تلقائيًا
);


const Product = models.Product || model("Product", ProductSchema);

export default Product;
