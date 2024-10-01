import React from "react";
import Link from "next/link";

export default function SignupForm() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex w-400 sm:100 h-400 shadow-md  transform translate-y-[-40%] rounded-lg">
        <div className="w-1/3 bg-blue-900 text-white flex flex-col	 justify-center items-center rounded-l-lg">
          <h2 className="text-4xl">SnapTicket</h2>
          <p>
            Your Journy <br /> Starts Here
          </p>
        </div>

        <div className="w-2/3">
          <div className="tx-4xl ">
            <h2 className="pl-10">Sign Up</h2>
          </div>
          <div className=" grid grid-cols-2 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="bg-blue-100 m-3 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-blue-100 m-3 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Phone Nuber"
              className="bg-blue-100 m-3 rounded-md p-2 "
            />
            <input
              type="text"
              placeholder="Email Address"
              className="bg-blue-100 m-3 rounded-md p-2"
            />
            <input
              type="password"
              placeholder="password"
              className="bg-blue-100 m-3 rounded-md p-2"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="bg-blue-100 m-3 rounded-md p-2"
            />
          </div>
          <div className="text-blue-800 ml-5">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2">
              Remember Password?
            </label>
          </div>
          <div className="m-5 flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-blue-900 text-white w-full p-1 rounded-md"
            >
              Create Your Account.
            </button>
            <p className="m-4">
              Already Have an accout.{" "}
              <Link href="/auth/login" className="text-blue-900 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
