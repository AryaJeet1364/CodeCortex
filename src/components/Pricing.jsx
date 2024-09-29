import React, { useState } from "react";
import Guitar from "./Guitar.jsx";
// import { CheckIcon } from "@heroicons/react/solid"; // Optional: Heroicons can be used for icons

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingOptions = {
    monthly: [
      {
        name: "Basic Tier Plan",
        price: "₹2499/month",
        features: [
          "One Time Payment of RFID system setup (excluded)",
          "Raw data analysis provided",
        ],
      },
      {
        name: "Special Tier Plan",
        price: "₹4179/month",
        features: [
          "One Time Payment of RFID system setup (excluded)",
          "Detailed data analysis provided on our platform",
          "Providing predictive analysis",
        ],
      },
    ],
    yearly: [
      {
        name: "Basic Tier Plan",
        price: "₹28998/year",
        features: [
          "One Time Payment of RFID system setup (excluded)",
          "Raw data analysis provided",
          "Rs One Thousand less than the monthly plan",
        ],
      },
      {
        name: "Special Tier Plan",
        price: "₹50049/year",
        features: [
          "One Time Payment of RFID system setup (excluded)",
          "Detailed data analysis provided on our platform",
          "Providing predictive analysis",
          "Rs One Thousand less than the monthly plan",
        ],
      },
    ],
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray1 via-gray4 to-gray6">
        <h2 className="text-lg font-semibold text-gray-600">
          Choose the perfect plan for you
        </h2>
        <h1 className="text-[3vw] font-extrabold text-gray-900 my-4">
          Pricing Plan
        </h1>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex bg-gray-200 rounded-lg mb-8">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "monthly"
                ? "bg-[#658352] text-white"
                : "bg-transparent text-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "yearly"
                ? "bg-[#658352] text-white"
                : "bg-transparent text-gray-600"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {pricingOptions[billingCycle].map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
              <p className="text-gray-500 mt-2">
                Billed {billingCycle === "monthly" ? "monthly" : "annually"}.
              </p>

              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex text-left text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-4 py-2 bg-[#658352] text-white rounded-lg hover:bg-[#7f9b6d] transition">
                Get an appointment
              </button>
            </div>
          ))}
        </div>
      </div>
      <Guitar />
    </>
  );
};

export default Pricing;
