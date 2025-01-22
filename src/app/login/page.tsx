"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext"; // استيراد useAuth

const Login = () => {
  const router = useRouter();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const { setIsLoggedIn } = useAuth(); // استخدام setIsLoggedIn من AuthContext

  useEffect(() => {
    gsap.from(".form", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => setIsFormVisible(true),
    });

    gsap.from(".input", {
      opacity: 0,
      x: -50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and password are required.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");

        // تحديث حالة تسجيل الدخول في AuthContext
        setIsLoggedIn(true);

        // إعادة تعيين حقول الإدخال
        setFormData({
          email: "",
          password: "",
        });

        // إعادة التوجيه إلى الصفحة الرئيسية
        router.push("/");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/back1.jpg')", // استبدل بمسار الصورة
      }}
    >
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="form bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
        >
          <h2 className="title text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>
          <p className="message text-sm text-gray-600 text-center mb-8">
            Log in to your account to continue.
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
              <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-all flex justify-center items-center`}
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-yellow-400 border-solid"></div>
            ) : (
              "Log In"
            )}
          </button>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 text-center mb-4">
              Or log in with
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
                type="button"
              >
                <FaFacebook /> Facebook
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all"
                type="button"
              >
                <FaGoogle /> Google
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;