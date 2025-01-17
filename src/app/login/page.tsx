"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGoogle, FaLock } from "react-icons/fa"; // استيراد الأيقونات

const Login = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [, setIsFieldsVisible] = useState(false);

  useEffect(() => {
    // تأثير الحركة للنموذج بشكل عام
    gsap.from(".form", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => setIsFormVisible(true),
    });

    // تأثير الحركة للحقول
    gsap.from(".input", {
      opacity: 0,
      x: -50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
      onComplete: () => setIsFieldsVisible(true),
    });
  }, []);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    gsap.to(event.target.nextElementSibling, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      gsap.to(event.target.nextElementSibling, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/back1.jpg')", // استبدل هذا بالمسار الفعلي للصورة
        backgroundSize: 'cover',
      }}
    >
      {isFormVisible && (
        <form className="form flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform scale-95">
          <h2 className="title text-3xl font-semibold text-royalblue mb-4 text-center">
            Login
          </h2>
          <div className="message text-sm text-gray-600 text-center mb-6">
            Welcome back! Please log in to continue.
          </div>

          {/* Email Input */}
          <label className="relative mb-4">
            <input
              className="input w-full p-4 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue transition-all duration-300"
              type="email"
              placeholder="Email"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="absolute left-3 top-3 text-gray-500 transition-all duration-300">
              <FaEnvelope className="text-gray-500" />
            </span>
          </label>

          {/* Password Input */}
          <label className="relative mb-4">
            <input
              className="input w-full p-4 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue transition-all duration-300"
              type="password"
              placeholder="Password"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="absolute left-3 top-3 text-gray-500 transition-all duration-300">
              <FaLock className="text-gray-500" />
            </span>
          </label>

          {/* Log In Button */}
          <button
            type="submit"
            className="submit py-3 px-4 bg-royalblue rounded-lg text-white bg-yellow-400 hover:bg-yellow-300 transition-all duration-300"
          >
            Log In
          </button>
          
          {/* Social Media Login */}
          <div className="social-login flex justify-center gap-4 my-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2">
              <FaFacebook /> Facebook
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center gap-2">
              <FaGoogle /> Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="signin text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-royalblue hover:underline text-yellow-600">
              Sign Up
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
