"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordData, setPasswordData] = useState("");

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 w-inputwidth bg-secondary focus:outline-none focus:ring-1 ring-ring rounded-sm"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-2 w-inputwidth bg-secondary focus:outline-none focus:ring-1 ring-ring rounded-sm pr-10"
            value={passwordData}
            onChange={handleInput}
          />
          <div className="absolute inset-y-0 right-2 flex items-center cursor-pointer">
            {showPassword ? (
              <FaRegEyeSlash size={20} />
            ) : (
              <IoEyeOutline size={20} />
            )}
          </div>

          <div className="flex gap-10 space-x-20 mt-2">
            <section className="flex gap-1">
              <input type="checkbox" />
              <p className="">Remind me</p>
            </section>
            <p className="text-primary">Forget Password?</p>
          </div>
        </div>
        <button className="bg-accent text-btntext p-2 rounded-sm hover:bg-hover">
          Login
        </button>
      </div>
    </div>
  );
}
