// src/app/cart/components/CartItem.tsx
'use client';

import React from 'react';
import Image from 'next/image';
interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  onRemove: () => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex items-center space-x-4">
        <Image
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-gray-600 dark:text-gray-400">Qty: {item.quantity}</p>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}