// src/app/cart/page.tsx
'use client'; // تفعيل التفاعلية باستخدام React

import React, { useState, useEffect } from 'react';
import CartItem from './components/CartItem';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // جلب عناصر العربة من API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // حذف عنصر من العربة
  const handleRemoveItem = async (id: string) => {
    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCartItems(cartItems.filter((item) => item.id !== id));
      } else {
        console.error('Failed to remove item');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // حساب المجموع الكلي
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Shopping Cart</h1>

          {/* قائمة عناصر العربة */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => handleRemoveItem(item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* المجموع الكلي */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Order Summary</h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">Total</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">${total.toFixed(2)}</p>
            </div>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}