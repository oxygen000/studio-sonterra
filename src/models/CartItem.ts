// src/app/models/CartItem.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem extends Document {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.CartItem || mongoose.model<ICartItem>('CartItem', CartItemSchema);