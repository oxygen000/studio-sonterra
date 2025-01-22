"use client";

import React from "react";
import { FaShoppingCart, FaUsers, FaBoxOpen, FaChartLine } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// تسجيل مكونات Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  // بيانات الطلبات
  const ordersData = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    datasets: [
      {
        label: "عدد الطلبات",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // بيانات المبيعات
  const salesData = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    datasets: [
      {
        label: "المبيعات",
        data: [5000, 6000, 7000, 8000, 9000, 10000, 11000],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة التحكم</h1>

      {/* بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaShoppingCart className="text-blue-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">الطلبات</p>
            <p className="text-2xl font-bold text-gray-800">120</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <FaUsers className="text-green-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">المستخدمين</p>
            <p className="text-2xl font-bold text-gray-800">1,200</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-purple-100 p-3 rounded-full">
            <FaBoxOpen className="text-purple-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">المنتجات</p>
            <p className="text-2xl font-bold text-gray-800">350</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FaChartLine className="text-yellow-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">الإيرادات</p>
            <p className="text-2xl font-bold text-gray-800">$12,000</p>
          </div>
        </div>
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">عدد الطلبات الشهرية</h2>
          <Bar data={ordersData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">المبيعات الشهرية</h2>
          <Line data={salesData} />
        </div>
      </div>
    </div>
  );
}