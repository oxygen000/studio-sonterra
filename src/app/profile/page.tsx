// src/app/profile/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import OrdersList from './components/OrdersList';
import AddressBook from './components/AddressBook';
import UpdateOrder from './components/UpdateOrder';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaUser } from 'react-icons/fa';

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
}

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<'orders' | 'address' | 'update'>('orders');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // جلب بيانات المستخدم من API
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return  <div className="flex justify-center items-center ">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-400 border-solid"></div>
  </div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* معلومات المستخدم */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                {user.image ? (
                 <FaUser/>
                ) : (
                  <FaUser className="w-full h-full text-gray-300 dark:text-gray-700" />
                )}
              </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>

          {/* التنقل بين الأقسام */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveSection('orders')}
              className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'orders'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveSection('address')}
              className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'address'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Address Book
            </button>
            <button
              onClick={() => setActiveSection('update')}
              className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'update'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Update Order
            </button>
          </div>

          {/* عرض القسم النشط */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {activeSection === 'orders' && <OrdersList userId={user._id} />}
            {activeSection === 'address' && <AddressBook userId={user._id} />}
            {activeSection === 'update' && <UpdateOrder userId={user._id} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}