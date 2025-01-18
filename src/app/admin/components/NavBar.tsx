"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token found:", token); // تحقق من وجود التوكن
    setIsLoggedIn(token === "admin-token");
  }, []); // تأكد من أن التحقق من التوكن يحدث فقط عند تحميل الصفحة

  const handleLogout = () => {
    Cookies.remove("token");
    router.replace("/admin/login");
  };

  return (
    <>
      <aside className="w-64 bg-gray-900 text-white">
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
            {isLoggedIn && (
              <li className="mb-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full text-left"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
