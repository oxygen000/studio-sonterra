'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from './products/page';
export default function Home() {
  useEffect(() => {
    // تأثير التحريك عند تحميل الصفحة
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );

    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power4.out' }
    );

    gsap.fromTo(
      '.product-card',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        delay: 1,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* شريط التنقل */}
      <Navbar/>

      {/* القسم الرئيسي */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <h1 className="hero-title text-4xl fProductCardont-bold mb-4">Welcome to My Store</h1>
        <p className="hero-subtitle text-lg">Discover amazing products and great deals!</p>
      </section>

      {/* قائمة المنتجات */}
      <section id="products" className="py-16 container mx-auto px-6">
        <Products/>
      </section>

      {/* التذييل */}
     <Footer/>
    </div>
  );
}
