// components/TravelTips.jsx
import React from "react";

const tips = [
  {
    icon: "🌍",
    title: "Respect Local Cultures",
    description:
      "Always learn a few words and customs before visiting a new country.",
  },
  {
    icon: "💵",
    title: "Plan Your Budget",
    description:
      "Research costs for food, travel, and lodging to avoid surprises.",
  },
  {
    icon: "🧳",
    title: "Pack Smart",
    description:
      "Always check weather, pack layers, and don’t forget power adapters!",
  },
];

export default function TravelTips() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white py-12 rounded-2xl mt-12 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">
        🧠 Smart Travel Tips
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
