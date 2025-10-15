"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSection() {
  const plans = [
    {
      title: "Starter",
      desc: "For most businesses that want to optimize web queries",
      price: "Free",
      color: "from-purple-400 to-cyan-300",
    },
    {
      title: "Popular",
      desc: "Invite & collaborate with other managers.",
      price: "$29.99",
      color: "from-yellow-400 to-orange-400",
      border: "border-yellow-400",
    },
    {
      title: "Enterprise",
      desc: "Assign & track your team's progress visually.",
      price: "$39.99",
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section className="bg-[#070C1A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          The Right Plan for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
            Transparent Pricing
          </span>
        </h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          We have several powerful plans to showcase your business and get
          discovered as a creative entrepreneur.
        </p>

        <div className="mt-14 space-y-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl ${
                plan.border || "border-white/10"
              } border p-8 flex flex-col md:flex-row md:items-center justify-between bg-[#0B1020]/60 backdrop-blur-md`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" /> All Limited Links
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" /> Own Analytics
                    Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" /> Chat Support
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-400" /> Unlimited Users
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0 text-center">
                <div className="text-2xl font-bold mb-3">{plan.price}</div>
                <button
                  className={`rounded-full border border-white/10 bg-gradient-to-r ${plan.color} text-sm px-6 py-2 font-medium hover:scale-[1.03] transition`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
