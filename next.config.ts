import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // تفعيل الوضع الصارم
  images: {
    domains: ['res.cloudinary.com'],    // السماح بتحميل الصور من هذا المضيف
  },
};

export default nextConfig;
