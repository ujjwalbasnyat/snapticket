"use client";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../app/firebase/firebase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordData, setPasswordData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [signInWithEmailAndPassword, , error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData(e.target.value);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailData(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(emailData, passwordData);
      
      if(res.user){
        setEmailData("");
        setPasswordData("");
        router.push("/");
      }
    } catch (e) {
      console.error("Sign-in error:", e);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <input
          type="email"
          name="email"
          value={emailData}
          placeholder="Email Address"
          className="p-2 w-inputwidth bg-secondary focus:outline-none focus:ring-1 ring-ring rounded-sm"
          onChange={handleEmailInput}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="p-2 w-inputwidth bg-secondary focus:outline-none focus:ring-1 ring-ring rounded-sm"
            value={passwordData}
            onChange={handlePasswordInput}
            required
          />
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
            {showPassword ? (
              <FaRegEyeSlash onClick={handleVisibility} />
            ) : (
              <IoEyeOutline onClick={handleVisibility} />
            )}
          </div>
        </div>
        <div className="flex gap-10 space-x-20">
          <section className="flex gap-1">
            <input type="checkbox" />
            <p className="">Remind me</p>
          </section>
          <p className="text-primary">Forget Password?</p>
        </div>
        <button
          type="submit"
          className="bg-accent text-btntext p-2 rounded-sm hover:bg-hover"
          onClick={handleSignIn}
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">Incorrect Password</p>}
      </div>
    </div>
  );
}
