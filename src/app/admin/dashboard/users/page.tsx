"use client";

import React, { useState } from "react";
import { FaSearch, FaUser, FaChartLine, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

// بيانات المستخدمين (يمكن استبدالها بجلب البيانات من API)
const users = [
  { id: 1, name: "محمد أحمد", email: "mohamed@example.com", joined: "2023-10-01", activity: 95 },
  { id: 2, name: "علي محمود", email: "ali@example.com", joined: "2023-10-02", activity: 80 },
  { id: 3, name: "سارة خالد", email: "sara@example.com", joined: "2023-10-03", activity: 60 },
  { id: 4, name: "فاطمة حسن", email: "fatima@example.com", joined: "2023-10-04", activity: 45 },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  // تصفية المستخدمين بناءً على البحث
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إدارة المستخدمين</h1>

      {/* حقل البحث */}
      <div className="mb-6">
        <div className="flex items-center bg-white rounded-lg shadow-md p-2">
          <input
            type="text"
            placeholder="ابحث عن مستخدم..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 outline-none"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaUser className="text-blue-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">إجمالي المستخدمين</p>
            <p className="text-2xl font-bold text-gray-800">{users.length}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <FaChartLine className="text-green-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">نشاط المستخدمين</p>
            <p className="text-2xl font-bold text-gray-800">
              {Math.round(users.reduce((sum, user) => sum + user.activity, 0) / users.length)}%
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-purple-100 p-3 rounded-full">
            <FaEnvelope className="text-purple-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">رسائل جديدة</p>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FaCalendarAlt className="text-yellow-500 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">نشاط الشهر</p>
            <p className="text-2xl font-bold text-gray-800">75%</p>
          </div>
        </div>
      </div>

      {/* جدول المستخدمين */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-right">رقم المستخدم</th>
              <th className="p-3 text-right">الاسم</th>
              <th className="p-3 text-right">البريد الإلكتروني</th>
              <th className="p-3 text-right">تاريخ الانضمام</th>
              <th className="p-3 text-right">النشاط</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3 text-right">{user.id}</td>
                <td className="p-3 text-right">{user.name}</td>
                <td className="p-3 text-right">{user.email}</td>
                <td className="p-3 text-right">{user.joined}</td>
                <td className="p-3 text-right">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${user.activity}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{user.activity}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}