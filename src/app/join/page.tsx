import React from "react";
import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        {/* Image */}
        <div className="flex justify-center mt-4 mb-4">
          <Image src="/nike-logo-two.png" alt="Join Us" width={180} height={180} />
        </div>

        <h1 className="text-3xl font-bold text-gray-800">BECOME A NIKE MEMBER</h1>
        <p className="text-gray-600 mt-2">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <input type="text" placeholder="Date of Birth" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          <p className="text-sm text-gray-500">Get a Nike Member Reward every year on your Birthday</p>

          {/* Country Dropdown */}
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black">
            <option>India</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          {/* Gender Selection */}
          <div className="flex gap-4">
            <input type="text" placeholder="Male" className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
            <input type="text" placeholder="Female" className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
          </div>

          {/* Email Subscription */}
          <div className="flex items-center gap-2 text-left">
            <input type="checkbox" id="email" className="w-5 h-5 text-black focus:ring-2 focus:ring-black" />
            <label htmlFor="email" className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>

          {/* Terms of Use */}
          <p className="text-xs text-gray-500">
            By creating an account, you agree to Nike's <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Use</span>.
          </p>

          {/* Submit Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
}
