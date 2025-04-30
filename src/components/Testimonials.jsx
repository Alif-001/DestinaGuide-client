// components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Alice Wanderlust",
    country: "USA",
    quote:
      "The beaches of Bali were like a dream. I’ll never forget the sunsets!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Carlos Traveler",
    country: "Spain",
    quote: "Vietnam’s food and culture totally blew my mind!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Nina Explorer",
    country: "Germany",
    quote:
      "Saint Martin’s Island was peaceful and mesmerizing. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-l from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white py-12  mt-12  rounded-2xl shadow-inner">
      <h2 className="text-3xl font-bold text-center mb-8">
        🌟 What Travelers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.country}
            </p>
            <p className="mt-3 text-gray-800 dark:text-gray-200 italic">
              “{t.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
