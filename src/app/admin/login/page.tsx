"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { gsap } from "gsap";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      Cookies.set("token", data.token, { expires: 1 }); // Save the token in cookies
      router.push("/admin/dashboard"); // Redirect to the dashboard
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during login.");
      } else {
        setError("An error occurred during login.");
      }
    }
  };

  return (
    <div className="login-container flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2 w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-white px-6 py-2 rounded font-bold w-full hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
