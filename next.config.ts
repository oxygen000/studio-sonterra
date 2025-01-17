import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // تعطيل تحسين الصور لأن GitHub Pages لا يدعم ذلك
  },
};

export default nextConfig;
