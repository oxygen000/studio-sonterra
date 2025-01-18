import mongoose from "mongoose";
import dotenv from "dotenv";

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error("لم يتم تحديد MONGO_URL في ملف .env");
  process.exit(1); // إنهاء التطبيق إذا لم يتم تحديد رابط قاعدة البيانات
}

const dbconnect = async () => {
  try {
    await mongoose.connect(MONGO_URL); // الاتصال بقاعدة البيانات
    console.log("تم الاتصال بقاعدة البيانات بنجاح");

    // الوصول إلى المجموعات
    const collections = mongoose.connection.collections; // الكائن الذي يحتوي على كل المجموعات
    console.log("المجموعات المتوفرة:", Object.keys(collections));
  } catch (error) {
    console.error("فشل الاتصال بقاعدة البيانات:", error.message);
    process.exit(1); // إنهاء التطبيق في حال فشل الاتصال
  }
};

export default dbconnect;
