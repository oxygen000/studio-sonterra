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
  const [formData, setFormData] = useState({
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
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/back1.jpg')", backgroundSize: "cover" }}>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="form flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="title text-3xl font-semibold text-royalblue mb-4 text-center">Login</h2>
          <div className="message text-sm text-gray-600 text-center mb-6">Welcome back! Please log in to continue.</div>

          {/* Email */}
          <label className="field-container">
            <div className="flex items-center relative">
              <FaEnvelope className="absolute left-3 text-gray-500" />
              <input
                className="field-input pl-10"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
              <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
            )}
          </label>

          {/* Password */}
          <label className="field-container">
            <div className="flex items-center relative">
              <FaLock className="absolute left-3 text-gray-500" />
              <input
                className="field-input pl-10"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-button ${loading ? "bg-gray-400" : "bg-royalblue"} text-white py-2 rounded-md transition-all`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Log In"}
          </button>

          {/* Social Login */}
          <div className="social-login flex justify-center gap-4 my-4">
            <button className="social-button bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md text-white">
              <FaFacebook /> Facebook
            </button>
            <button className="social-button bg-red-600 flex items-center gap-2 px-4 py-2 rounded-md text-white">
              <FaGoogle /> Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="signin text-center text-sm text-black mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-royalblue hover:underline text-yellow-400">
              Sign Up
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;