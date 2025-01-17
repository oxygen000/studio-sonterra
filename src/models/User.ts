import { Schema, model, models } from 'mongoose';

// التحقق من وجود الموديل قبل تعريفه
const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = models.User || model('User', UserSchema);

export default User;
