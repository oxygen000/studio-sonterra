// src/app/profile/components/UpdateOrder.tsx
'use client';

import React, { useState } from 'react';

interface UpdateOrderProps {
  userId: string; // تعريف userId كـ prop
}

export default function UpdateOrder({ userId }: UpdateOrderProps) {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState(''); // رسالة تأكيد أو خطأ

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // إرسال بيانات التحديث إلى الخادم
      const response = await fetch('/api/orders/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, status, userId }), // إضافة userId إلى البيانات المرسلة
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Order updated successfully!');
        setOrderId(''); // إعادة تعيين الحقول
        setStatus('');
      } else {
        setMessage(data.error || 'Failed to update order.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Update Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">Order ID</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            required
          >
            <option value="">Select Status</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Update Order
        </button>
      </form>

      {/* عرض رسالة التأكيد أو الخطأ */}
      {message && (
        <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
          {message}
        </div>
      )}
    </div>
  );
}