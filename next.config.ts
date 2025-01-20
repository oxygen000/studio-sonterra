import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // تفعيل الوضع الصارم
  images: {
    domains: ['images3.alphacoders.com'],    // السماح بتحميل الصور من هذا المضيف
  },
};

export default nextConfig;
