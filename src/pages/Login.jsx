import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";

export default function Login() {
  const [method, setMethod] = useState("initial"); // 'initial' | 'email'

  return (
    <div className="flex items-center justify-center container my-20">
      <div className="unique-form-size p-20 bg-neutral-900 rounded-3xl shadow-2xl text-center animate-fade-in">
        <div className="mb-5">
          <img
            src={logo}
            alt="Destinaguide"
            className="mx-auto w-20 h-20 object-contain"
          />
          <h2 className="text-2xl font-bold text-gray-100">
            Destina<span className="font-bold text-purple-400">Guide</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Don't have an account?{" "}
            <Link to="/register" className="text-purple-400 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {method === "initial" && (
          <div className="space-y-4">
            <button
              onClick={() => {
                /* Google login */
              }}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full flex items-center justify-center gap-3"
            >
              <div className="bg-white rounded-full p-1">
                <FcGoogle />
              </div>
              Continue with Google
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-neutral-900 px-2 text-gray-500">Or</span>
              </div>
            </div>

            <button
              onClick={() => setMethod("email")}
              className="w-full py-3 border border-gray-700 hover:border-purple-400 rounded-full font-medium text-gray-300 flex items-center justify-center gap-3"
            >
              📧 Continue with Email
            </button>

            <button
              onClick={() => {
                /* Apple login */
              }}
              className="w-full py-3 border border-gray-700 hover:border-gray-500 rounded-full font-medium text-gray-300 flex items-center justify-center gap-3"
            >
              <SiApple />
              Continue with Apple
            </button>
          </div>
        )}

        {method === "email" && (
          <>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-4"
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-neutral-800 border border-gray-700 text-gray-200 placeholder-gray-500 rounded-full focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-neutral-800 border border-gray-700 text-gray-200 placeholder-gray-500 rounded-full focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all"
              >
                Log In
              </button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-neutral-900 px-2 text-gray-500">Or</span>
              </div>
            </div>

            <div className="space-y-5">
              <button
                onClick={() => {
                  /* Google login */
                }}
                className="w-full py-3 border border-gray-700 hover:border-purple-400 rounded-full flex items-center justify-center gap-3 text-gray-300"
              >
                <div className="bg-white rounded-full p-1">
                  <FcGoogle />
                </div>
                Continue with Google
              </button>

              <button
                onClick={() => {
                  /* Apple login */
                }}
                className="w-full py-3 border border-gray-700 hover:border-gray-500 rounded-full flex items-center justify-center gap-3 text-gray-300"
              >
                <SiApple />
                Continue with Apple
              </button>
            </div>
          </>
        )}

        <p className="text-xs text-gray-500 mt-6">
          By logging in, you agree to our{" "}
          <a href="#" className="underline text-purple-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-purple-400">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
