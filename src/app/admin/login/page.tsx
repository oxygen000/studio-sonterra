"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { gsap } from "gsap";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      router.replace("/admin/dashboard"); // Redirect to dashboard if already logged in
    }

    // GSAP animation for the login form and elements
    gsap.from(".login-container", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
    
    gsap.from(".login-form input", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".login-form button", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
    });
  }, [router]);

  return (
    <div className="login-container flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Admin Login</h1>
        <form className="login-form mt-6">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 w-full mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2 w-full mb-4"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-white px-6 py-2 rounded font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
