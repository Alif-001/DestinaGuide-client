// components/NewsletterSignup.jsx
import React from "react";
import useComingSoon from "../hooks/useComingSoon";

export default function NewsletterSignup() {
    const { handleComingSoon } = useComingSoon();
  return (
    <section onSubmit={(e) => e.preventDefault()} className="bg-blue-50 dark:bg-gray-900 py-12 mt-12 px-4 rounded-2xl text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        📬 Stay Updated with Travel Deals!
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        Join our newsletter and get the best travel tips, discounts, and hidden
        gem locations straight to your inbox.
      </p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-3 rounded-xl border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          onClick={handleComingSoon}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Subscribe ✅
        </button>
      </form>
    </section>
  );
}
