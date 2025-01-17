"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaEnvelope, FaLock, FaUser, FaFacebook, FaGoogle } from "react-icons/fa"; // Added icons for Facebook and Google

const SignUp = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [, setIsFieldsVisible] = useState(false);

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
        backgroundImage: "url('/back1.jpg')", // Update with your actual image path
        backgroundSize: 'cover',
      }}
    >
      {isFormVisible && (
        <form className="form flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform scale-95">
          <h2 className="title text-3xl font-semibold text-royalblue mb-4 text-center">
            Sign Up
          </h2>
          <div className="message text-sm text-gray-600 text-center mb-6">
            Signup now and get full access to our app.
          </div>

          {/* Firstname and Lastname Inputs */}
          <div className="flex gap-4 w-full">
            <label className="relative flex-1">
              <input
                className="input w-full p-4 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue transition-all duration-300"
                type="text"
                placeholder="Firstname"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span className="absolute left-3 top-3 text-gray-500 transition-all duration-300">
                <FaUser className="text-gray-500" />
              </span>
            </label>

            <label className="relative flex-1">
              <input
                className="input w-full p-4 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue transition-all duration-300"
                type="text"
                placeholder="Lastname"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span className="absolute left-3 top-3 text-gray-500 transition-all duration-300">
                <FaUser className="text-gray-500" />
              </span>
            </label>
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

          {/* Confirm Password Input */}
          <label className="relative mb-4">
            <input
              className="input w-full p-4 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue transition-all duration-300"
              type="password"
              placeholder="Confirm Password"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="absolute left-3 top-3 text-gray-500 transition-all duration-300">
              <FaLock className="text-gray-500" />
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit py-3 px-4 bg-royalblue text-white rounded-lg bg-yellow-400 hover:bg-yellow-300 transition-all duration-300"
          >
            Submit
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

          {/* Login Link */}
          <p className="signin text-center text-sm text-black mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-royalblue hover:underline text-yellow-600">
              Login
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default SignUp;
