"use client";

import React, { useState } from "react";
import Link from "next/link";
import InputField from "./InputField"; // Adjust the import path as necessary
import PasswordField from "./PasswordField"; // Adjust the import path as necessary
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-md rounded-lg overflow-hidden">
        {/* Branding section only visible on medium screens and up */}
        <div className="md:flex hidden md:w-1/3 bg-blue-900 text-white rounded-l-lg flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">SnapTicket</h2>
          <p>Your Journey Starts Here</p>
        </div>

        {/* Sign-up form section */}
        <div className="w-full md:w-2/3 p-5">
          <h2 className="text-2xl font-bold text-center md:text-left mb-4">
            Sign Up
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <PasswordField
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordField
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="text-blue-800 mt-3 flex items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2">
              Remember Password?
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white w-full py-2 mt-4 rounded-md"
          >
            Create Your Account
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-900 font-bold">
              Login
            </Link>
          </p>

          <div className="flex gap-2 items-center justify-center mt-4">
            <FcGoogle className="text-xl" />
            <a href="#" className="hover:text-blue-900 hover:underline">
              Login with Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
