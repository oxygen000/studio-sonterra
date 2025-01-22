// src/app/profile/components/OrdersList.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface Order {
  _id: string;
  product: string;
  status: string;
  date: string;
  total: number;
}

interface OrdersListProps {
  userId: string;
}

export default function OrdersList({ userId }: OrdersListProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // جلب طلبات المستخدم من API
    const fetchOrders = async () => {
      const response = await fetch(`/api/orders?userId=${userId}`);
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{order.product}</p>
                <p className="text-gray-600 dark:text-gray-400">Order ID: #{order._id}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  order.status === 'Delivered'
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'Shipped'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Date:</span> {order.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Total:</span> ${order.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}