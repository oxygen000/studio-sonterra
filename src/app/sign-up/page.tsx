"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser, FaFacebook, FaGoogle } from "react-icons/fa";
import "./style.css";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface PasswordValidations {
  hasUppercase: boolean;
  hasSpecialChar: boolean;
  isValidLength: boolean;
}

const SignUp = () => {
  const router = useRouter();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [passwordValidations, setPasswordValidations] = useState<PasswordValidations>({
    hasUppercase: false,
    hasSpecialChar: false,
    isValidLength: false,
  });

  const [loading, setLoading] = useState<boolean>(false);

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

  const validatePassword = (password: string): void => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isValidLength = password.length >= 6;

    setPasswordValidations({
      hasUppercase,
      hasSpecialChar,
      isValidLength,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
  
    if (name === "password") {
      validatePassword(value);
    }
  
    // تحقق من أن firstname و lastname يحتويان فقط على أحرف ومسافات
    if (name === "firstname" || name === "lastname") {
      const lettersOnly = /^[A-Za-z\s]+$/;
      if (!lettersOnly.test(value) && value !== "") {
        toast.error(`${name === "firstname" ? "First name" : "Last name"} can only contain letters and spaces.`);
        return;
      }
    }
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");

    let formattedValue = numericValue;
    if (numericValue.startsWith("0")) {
      formattedValue = `+20${numericValue.slice(1)}`;
    } else if (!numericValue.startsWith("20")) {
      formattedValue = `+20${numericValue}`;
    } else {
      formattedValue = `+${numericValue}`;
    }

    setFormData((prev) => ({ ...prev, phone: formattedValue }));
  };

  const validateForm = (): boolean => {
    const { firstname, lastname, email, password, confirmPassword, phone } = formData;

    if (!firstname || !lastname) {
      toast.error("First name and last name are required.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    if (!passwordValidations.hasUppercase || !passwordValidations.hasSpecialChar || !passwordValidations.isValidLength) {
      toast.error("Password must be at least 6 characters long, include one uppercase letter, and one special character.");
      return false;
    }

    if (!/^(\+20|0)\d{10}$/.test(phone)) {
      toast.error("Invalid phone number. Please enter a valid Egyptian phone number (e.g., 01234567890 or +201234567890).");
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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        });
        router.push("/");
      } else {
        toast.error(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/back1.jpg')", backgroundSize: "cover" }}>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="form flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="title text-3xl font-semibold text-royalblue mb-4 text-center">Sign Up</h2>
          <div className="message text-sm text-gray-600 text-center mb-6">Sign up now and get full access to our app.</div>

          {/* Firstname and Lastname */}
          <div className="flex gap-4">
            <label className="field-container flex-1">
              <div className="flex items-center relative">
                <FaUser className="absolute left-3 text-gray-500" />
                <input
                  className="field-input pl-10"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {!formData.firstname && <p className="text-red-500 text-sm mt-1">First name is required.</p>}
            </label>
            <label className="field-container flex-1">
              <div className="flex items-center relative">
                <FaUser className="absolute left-3 text-gray-500" />
                <input
                  className="field-input pl-10"
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {!formData.lastname && <p className="text-red-500 text-sm mt-1">Last name is required.</p>}
            </label>
          </div>

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

          {/* Phone */}
          <label className="field-container">
            <div className="flex items-center relative">
              <span className="absolute left-3 text-xl text-green-500">🇪🇬</span>
              <input
                className="field-input pl-12"
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            {formData.phone && !/^(\+20|0)\d{10}$/.test(formData.phone) && (
              <p className="text-red-500 text-sm mt-1">
                Invalid phone number. Please enter a valid Egyptian phone number (e.g., 01234567890 or +201234567890).
              </p>
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
            {formData.password && (
              <ul className="text-sm mt-2">
                <li className={passwordValidations.isValidLength ? "text-green-600" : "text-red-600"}>
                  - At least 6 characters
                </li>
                <li className={passwordValidations.hasUppercase ? "text-green-600" : "text-red-600"}>
                  - At least one uppercase letter
                </li>
                <li className={passwordValidations.hasSpecialChar ? "text-green-600" : "text-red-600"}>
                  - At least one special character
                </li>
              </ul>
            )}
          </label>

          {/* Confirm Password */}
          <label className="field-container">
            <div className="flex items-center relative">
              <FaLock className="absolute left-3 text-gray-500" />
              <input
                className="field-input pl-10"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-button ${loading ? "bg-gray-400" : "bg-royalblue"} text-white py-2 rounded-md transition-all`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
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

          {/* Login Link */}
          <p className="signin text-center text-sm text-black mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-royalblue hover:underline text-yellow-300">
              Login
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default SignUp;