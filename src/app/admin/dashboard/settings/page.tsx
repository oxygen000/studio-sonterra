"use client";

import React, { useState } from "react";
import { FaLanguage, FaMoon, FaBell, FaSave, FaUndo, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Settings() {
  const [language, setLanguage] = useState("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // حفظ الإعدادات
  const handleSave = () => {
    // هنا يمكنك إرسال الإعدادات إلى API أو قاعدة البيانات
    console.log("تم حفظ الإعدادات:", { language, darkMode, notifications });

    // عرض إشعار نجاح
    toast.success("تم حفظ الإعدادات بنجاح!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // إعادة تعيين الإعدادات
  const handleReset = () => {
    setLanguage("ar");
    setDarkMode(false);
    setNotifications(true);

    // عرض إشعار نجاح
    toast.info("تم إعادة تعيين الإعدادات!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // إلغاء التغييرات
  const handleCancel = () => {
    // هنا يمكنك إضافة منطق لإلغاء التغييرات
    toast.warn("تم إلغاء التغييرات!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">الإعدادات</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* إعداد اللغة */}
        <div className="mb-6">
          <label className="text-gray-700 text-sm font-bold mb-2 flex items-center">
            <FaLanguage className="mr-2" />
            اللغة
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="ar"
                checked={language === "ar"}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">العربية</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="en"
                checked={language === "en"}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">الإنجليزية</span>
            </label>
          </div>
        </div>

        {/* إعداد الوضع الليلي */}
        <div className="mb-6">
          <label className="text-gray-700 text-sm font-bold mb-2 flex items-center">
            <FaMoon className="mr-2" />
            تفعيل الوضع الليلي
          </label>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
              darkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>

        {/* إعداد الإشعارات */}
        <div className="mb-6">
          <label className="text-gray-700 text-sm font-bold mb-2 flex items-center">
            <FaBell className="mr-2" />
            تفعيل الإشعارات
          </label>
          <div
            onClick={() => setNotifications(!notifications)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
              notifications ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>

        {/* مجموعة الأزرار */}
        <div className="flex justify-end space-x-4">
          {/* زر الإلغاء */}
          <button
            onClick={handleCancel}
            className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          >
            <FaTimes className="mr-2" />
            إلغاء
          </button>

          {/* زر إعادة تعيين */}
          <button
            onClick={handleReset}
            className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          >
            <FaUndo className="mr-2" />
            إعادة تعيين
          </button>

          {/* زر الحفظ */}
          <button
            onClick={handleSave}
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <FaSave className="mr-2" />
            حفظ
          </button>
        </div>
      </div>

      {/* إشعارات Toastify */}
      <ToastContainer />
    </div>
  );
}