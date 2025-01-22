"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">الصفحة التي تبحث عنها غير موجودة.</p>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        العودة إلى الصفحة الرئيسية
      </button>
    </div>
    <Footer />
    </>
    
  );
}