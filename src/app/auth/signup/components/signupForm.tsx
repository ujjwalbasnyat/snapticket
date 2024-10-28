"use client";

import React, { use, useState } from "react";
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
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex w-400 h-400 shadow-md transform translate-y-[-20%] rounded-lg">
        <div className="w-1/3 bg-blue-900 text-white flex flex-col justify-center items-center rounded-l-lg">
          <h2 className="text-4xl font-bold">SnapTicket</h2>
          <p>Your Journey Starts Here</p>
        </div>
        <div className="w-2/3 p-5">
          <h2 className="text-2xl font-bold pl-3">Sign Up</h2>
          <div className="grid grid-cols-2 gap-3">
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

          <div className="text-blue-800 mt-3">
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

          <p className="mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-900 font-bold">
              Login
            </Link>
          </p>
          <div className="flex gap-2 items-center p-l-5 m-2">
            <FcGoogle />
            <a href="#" className="hover:text-primary hover:underline">
              Login with Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
