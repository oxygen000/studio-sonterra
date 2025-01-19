import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // تفعيل الوضع الصارم
  images: {
    domains: ['plus.unsplash.com','i.pinimg.com'],    // السماح بتحميل الصور من هذا المضيف
  },
};

export default nextConfig;
