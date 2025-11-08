"use client";

import { useState } from "react";
import LoginToggle from "./LoginToggle";

export default function LoginForm() {
  const [loginType, setLoginType] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login submitted:", { loginType, email, password });
    // Add your login logic here
  };

  return (
    <div className="layout-content-container flex flex-col w-full max-w-md rounded-xl bg-white  shadow-lg overflow-hidden border border-gray-200 ">
      {/* Header */}
      <div className="w-full px-6 sm:px-8 pt-8 pb-4">
        <h1 className="text-gray-900 font-display text-[28px] font-bold leading-tight text-center">
          AICI Group Portal
        </h1>
      </div>

      {/* Login Type Toggle */}
      <LoginToggle loginType={loginType} setLoginType={setLoginType} />

      {/* Form */}
      <div className="px-6 sm:px-8 pt-4 pb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Field */}
          <label className="flex flex-col w-full">
            <p className="text-gray-900 text-sm font-medium leading-normal pb-2 font-display">
              Email Address
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-gray-900 focus:outline-0 focus:ring-2 focus:ring-red-600/50 border border-gray-300  bg-gray-50  h-12 placeholder:text-gray-500  p-4 text-base font-normal leading-normal focus:z-10 transition-shadow duration-200"
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Password Field */}
          <label className="flex flex-col w-full">
            <p className="text-gray-900 text-sm font-medium leading-normal pb-2 font-display">
              Password
            </p>
            <div className="flex w-full flex-1 items-stretch">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-gray-900 focus:outline-0 focus:ring-2 focus:ring-red-600/50 border border-gray-300  bg-gray-50  h-12 placeholder:text-gray-500  px-4 pr-2 text-base font-normal leading-normal border-r-0 focus:z-10 transition-shadow duration-200"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 dark:text-gray-400 flex border border-gray-300  bg-gray-50  items-center justify-center px-3 rounded-r-lg border-l-0 hover:text-gray-700 transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </label>

          {/* Forgot Password */}
          <div className="flex justify-end mt-1">
            <a
              className="text-sm font-medium text-blue-800 hover:text-blue-800/80  transition-colors"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="flex w-full items-center justify-center rounded-lg bg-red-600 h-12 px-6 text-base font-medium text-white shadow-sm hover:bg-red-600/90 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2  transition-all duration-200 mt-4"
            type="submit"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 ">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="font-medium text-blue-800 hover:text-blue-800/80 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
