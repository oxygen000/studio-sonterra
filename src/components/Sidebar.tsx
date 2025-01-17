import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/users">Users</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/products">Products</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/orders">Orders</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
