// src/app/profile/components/AddressBook.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface Address {
  _id: string;
  name: string;
  address: string;
}

interface AddressBookProps {
  userId: string; // تعريف userId كـ prop
}

export default function AddressBook({ userId }: AddressBookProps) {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [newAddress, setNewAddress] = useState({ name: '', address: '' });
  const [message, setMessage] = useState(''); // رسالة تأكيد أو خطأ

  // جلب العناوين من API
  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await fetch(`/api/addresses?userId=${userId}`);
      const data = await response.json();
      setAddresses(data);
    };

    fetchAddresses();
  }, [userId]);

  // حذف عنوان
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/addresses/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAddresses(addresses.filter((address) => address._id !== id));
        setMessage('Address deleted successfully!');
      } else {
        setMessage('Failed to delete address.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  // إضافة عنوان جديد
  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newAddress, userId }),
      });

      const data = await response.json();

      if (response.ok) {
        setAddresses([...addresses, data]);
        setNewAddress({ name: '', address: '' }); // إعادة تعيين الحقول
        setMessage('Address added successfully!');
      } else {
        setMessage(data.error || 'Failed to add address.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Address Book</h2>

      {/* نموذج إضافة عنوان جديد */}
      <form onSubmit={handleAddAddress} className="mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-800 dark:text-white mb-2">Name</label>
            <input
              type="text"
              value={newAddress.name}
              onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
              className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 dark:text-white mb-2">Address</label>
            <input
              type="text"
              value={newAddress.address}
              onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Add Address
          </button>
        </div>
      </form>

      {/* عرض رسالة التأكيد أو الخطأ */}
      {message && (
        <div className="mb-4 p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
          {message}
        </div>
      )}

      {/* قائمة العناوين */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{address.name}</p>
                <p className="text-gray-600 dark:text-gray-400">{address.address}</p>
              </div>
              <button
                onClick={() => handleDelete(address._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}