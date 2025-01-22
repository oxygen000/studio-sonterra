"use client";

import React, { useState } from "react";
import { FaSearch, FaReply, FaCheckCircle } from "react-icons/fa";

// تعريف واجهة للشكوى
interface Complaint {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
}

// بيانات الشكاوي (يمكن استبدالها بجلب البيانات من API)
const complaints: Complaint[] = [
  {
    id: 1,
    name: "محمد أحمد",
    email: "mohamed@example.com",
    message: "الموقع بطيء جدًا عند تحميل الصفحات.",
    status: "معلق",
  },
  {
    id: 2,
    name: "علي محمود",
    email: "ali@example.com",
    message: "أريد إضافة ميزة جديدة لتتبع الطلبات.",
    status: "معلق",
  },
  {
    id: 3,
    name: "سارة خالد",
    email: "sara@example.com",
    message: "واجهة المستخدم غير واضحة.",
    status: "تم الرد",
  },
];

export default function AdminComplaints() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [reply, setReply] = useState("");

  // تصفية الشكاوي بناءً على البحث
  const filteredComplaints = complaints.filter((complaint) =>
    complaint.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // عرض تفاصيل الشكوى
  const handleViewComplaint = (complaint: Complaint) => {
    setSelectedComplaint(complaint);
  };

  // الرد على الشكوى
  const handleReply = () => {
    if (selectedComplaint) {
      // هنا يمكنك إرسال الرد إلى API أو قاعدة البيانات
      console.log("تم الرد على الشكوى:", { id: selectedComplaint.id, reply });

      // تحديث حالة الشكوى إلى "تم الرد"
      const updatedComplaints = complaints.map((complaint) =>
        complaint.id === selectedComplaint.id ? { ...complaint, status: "تم الرد" } : complaint
      );
      complaints.splice(0, complaints.length, ...updatedComplaints);

      // إغلاق النافذة المنبثقة
      setSelectedComplaint(null);
      setReply("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إدارة شكاوي العملاء</h1>

      {/* حقل البحث */}
      <div className="mb-6">
        <div className="flex items-center bg-white rounded-lg shadow-md p-2">
          <input
            type="text"
            placeholder="ابحث عن شكوى..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 outline-none"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* جدول الشكاوي */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-right">رقم الشكوى</th>
              <th className="p-3 text-right">الاسم</th>
              <th className="p-3 text-right">البريد الإلكتروني</th>
              <th className="p-3 text-right">حالة الشكوى</th>
              <th className="p-3 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredComplaints.map((complaint) => (
              <tr key={complaint.id} className="border-b">
                <td className="p-3 text-right">{complaint.id}</td>
                <td className="p-3 text-right">{complaint.name}</td>
                <td className="p-3 text-right">{complaint.email}</td>
                <td className="p-3 text-right">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      complaint.status === "تم الرد"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {complaint.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleViewComplaint(complaint)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaReply className="inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* تفاصيل الشكوى والرد */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الشكوى</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">رقم الشكوى:</span> {selectedComplaint.id}
              </p>
              <p>
                <span className="font-bold">الاسم:</span> {selectedComplaint.name}
              </p>
              <p>
                <span className="font-bold">البريد الإلكتروني:</span> {selectedComplaint.email}
              </p>
              <p>
                <span className="font-bold">الشكوى:</span> {selectedComplaint.message}
              </p>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reply">
                  الرد
                </label>
                <textarea
                  id="reply"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="اكتب ردك هنا..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedComplaint(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                إغلاق
              </button>
              <button
                onClick={handleReply}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                إرسال الرد
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}