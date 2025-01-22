import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

// التحقق من كلمة السر باستخدام الشروط
const validatePassword = (password: string) => {
  // التحقق من وجود حرف كبير، رقم، ورمز خاص بالإضافة لطول كلمة المرور
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  return passwordRegex.test(password);
};

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'First name is required.'], // رسالة خطأ مخصصة
      trim: true,
      minlength: [2, 'First name must be at least 2 characters long.'], // رسالة خطأ مخصصة
      match: [/^[a-zA-Z\u0600-\u06FF\s]+$/, 'First name can only contain letters and spaces.'], // السماح بالأحرف الإنجليزية والعربية والمسافات
    },
    lastname: {
      type: String,
      required: [true, 'Last name is required.'], // رسالة خطأ مخصصة
      trim: true,
      minlength: [2, 'Last name must be at least 2 characters long.'], // رسالة خطأ مخصصة
      match: [/^[a-zA-Z\u0600-\u06FF\s]+$/, 'Last name can only contain letters and spaces.'], // السماح بالأحرف الإنجليزية والعربية والمسافات
    },
    email: {
      type: String,
      required: [true, 'Email is required.'], // رسالة خطأ مخصصة
      unique: true,
      trim: true,
      lowercase: true, // تحويل البريد الإلكتروني إلى أحرف صغيرة
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'], // التحقق من صحة البريد الإلكتروني
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required.'], // رسالة خطأ مخصصة
      match: [/^\+[1-9]\d{1,14}$/, 'Please use a valid phone number in E.164 format.'], // تنسيق E.164
    },
    password: {
      type: String,
      required: [true, 'Password is required.'], // رسالة خطأ مخصصة
      minlength: [6, 'Password must be at least 6 characters long.'], // رسالة خطأ مخصصة
      validate: {
        validator: validatePassword,
        message: 'Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character.',
      },
    },
    isVerified: {
      type: Boolean,
      default: false, // القيمة الافتراضية
    },
    confirmPassword: {
      type: String,
      select: false, // حقل مؤقت ولا يتم تخزينه في قاعدة البيانات
    },
  },
  { timestamps: true } // إضافة timestamps تلقائيًا
);

// التحقق من تطابق كلمة السر وكلمة السر المعاد إدخالها قبل الحفظ
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // التحقق من تطابق كلمة السر مع تأكيدها
  if (this.password !== this.confirmPassword) {
    throw new Error('Password and confirm password do not match.');
  }

  // تشفير كلمة المرور
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // إزالة confirmPassword من النموذج لأنه لا ينبغي أن يكون مخزنًا في قاعدة البيانات
  this.confirmPassword = undefined;

  next();
});

// إنشاء النموذج أو استخدام النموذج الموجود إذا كان موجودًا
const User = models.User || model('User', UserSchema);

export default User;