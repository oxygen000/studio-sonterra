// src/app/models/Address.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAddress extends Document {
  userId: string;
  name: string;
  address: string;
}

const AddressSchema: Schema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.models.Address || mongoose.model<IAddress>('Address', AddressSchema);