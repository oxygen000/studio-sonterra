"use client";

import React, { useState } from "react";
import { FaSearch, FaPrint, FaEye } from "react-icons/fa";
import Receipt from "./components/Receipt"; // استيراد مكون الإيصال

// تعريف واجهة للطلب
interface Order {
  id: number;
  customer: string;
  date: string;
  total: number;
  status: string;
}

// بيانات الطلبات (يمكن استبدالها بجلب البيانات من API)
const orders: Order[] = [
  { id: 1, customer: "محمد أحمد", date: "2023-10-01", total: 150, status: "تم التوصيل" },
  { id: 2, customer: "علي محمود", date: "2023-10-02", total: 200, status: "قيد التوصيل" },
  { id: 3, customer: "سارة خالد", date: "2023-10-03", total: 300, status: "ملغى" },
  { id: 4, customer: "فاطمة حسن", date: "2023-10-04", total: 250, status: "تم التوصيل" },
];

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [printOrder, setPrintOrder] = useState<Order | null>(null);

  // تصفية الطلبات بناءً على البحث
  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // عرض تفاصيل الطلب
  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  // طباعة بوليصة الطلب
  const handlePrintOrder = (order: Order) => {
    setPrintOrder(order);
    setTimeout(() => {
      const printContents = document.getElementById("printable-receipt")?.innerHTML;
      const originalContents = document.body.innerHTML;

      if (printContents) {
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      }

      setPrintOrder(null);
    }, 500); // تأخير الطباعة لضمان تحميل الباركود
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إدارة الطلبات</h1>

      {/* حقل البحث */}
      <div className="mb-6">
        <div className="flex items-center bg-white rounded-lg shadow-md p-2">
          <input
            type="text"
            placeholder="ابحث عن طلب..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 outline-none"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* جدول الطلبات */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-right">رقم الطلب</th>
              <th className="p-3 text-right">اسم العميل</th>
              <th className="p-3 text-right">التاريخ</th>
              <th className="p-3 text-right">المجموع</th>
              <th className="p-3 text-right">الحالة</th>
              <th className="p-3 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3 text-right">{order.id}</td>
                <td className="p-3 text-right">{order.customer}</td>
                <td className="p-3 text-right">{order.date}</td>
                <td className="p-3 text-right">${order.total}</td>
                <td className="p-3 text-right">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      order.status === "تم التوصيل"
                        ? "bg-green-100 text-green-800"
                        : order.status === "قيد التوصيل"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleViewOrder(order)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FaEye className="inline-block" />
                  </button>
                  <button
                    onClick={() => handlePrintOrder(order)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaPrint className="inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* تفاصيل الطلب */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الطلب</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">رقم الطلب:</span> {selectedOrder.id}
              </p>
              <p>
                <span className="font-bold">اسم العميل:</span> {selectedOrder.customer}
              </p>
              <p>
                <span className="font-bold">التاريخ:</span> {selectedOrder.date}
              </p>
              <p>
                <span className="font-bold">المجموع:</span> ${selectedOrder.total}
              </p>
              <p>
                <span className="font-bold">الحالة:</span> {selectedOrder.status}
              </p>
            </div>
            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* طباعة الإيصال */}
      {printOrder && (
        <div id="printable-receipt" className="hidden">
          <Receipt order={printOrder} />
        </div>
      )}
    </div>
  );
}