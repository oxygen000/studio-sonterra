// src/app/models/Order.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  userId: string;
  product: string;
  status: string;
  date: string;
  total: number;
}

const OrderSchema: Schema = new Schema({
  userId: { type: String, required: true },
  product: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
  total: { type: Number, required: true },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);