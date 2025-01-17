import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex ">
      <aside className="w-64 bg-gray-900 text-white ">
        <nav className="p-6 fixed">
          <ul>
            <li className="mb-4">
              <a href="/admin/dashboard" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="/admin/dashboard/products" className="hover:underline">
                Products
              </a>
            </li>
            <li className="mb-4">
              <a href="/admin/dashboard/orders" className="hover:underline">
                Orders
              </a>
            </li>
            <li className="mb-4">
              <a href="/admin/dashboard/users" className="hover:underline">
                Users
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
