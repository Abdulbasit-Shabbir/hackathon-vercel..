import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        <p className="text-gray-600 text-sm mt-1">Create an account to continue</p>

        {/* Form */}
        <form className="mt-5 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-left text-sm">
            <input type="checkbox" id="terms" className="w-4 h-4 text-black focus:ring-2 focus:ring-black" />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the <span className="underline cursor-pointer">Terms & Conditions</span>.
            </label>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-gray-600 mt-4">
          Already have an account? <span className="text-black cursor-pointer underline">Sign In</span>
        </p>
      </div>
    </div>
  );
}
