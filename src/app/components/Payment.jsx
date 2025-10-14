"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

export default function Payment() {
  const [openIndex, setOpenIndex] = useState()

  const faqs = [
    { q: "What is AI content writing tool?", a: "It’s an AI-powered system that helps generate content instantly using advanced GPT models." },
    { q: "How do you different criteria in your process?", a: "We analyze the tone, topic, and structure to tailor each output accordingly." },
    { q: "How can I invest money here?", a: "You can subscribe through our pricing plans securely using Stripe or other gateways." },
    { q: "How can I trade my crypto into different currency?", a: "We currently don’t support crypto, but fiat and card payments are accepted." },
    { q: "How can I accept credit cards online?", a: "Simply integrate Stripe or PayPal for easy and secure credit card payments." },
  ];

  return (
    <section className="bg-[#070C1A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Right Plan for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Transparent Pricing</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mt-3">
            We have several powerful plans to showcase your business and get discovered as a creative entrepreneur.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-6">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between bg-[#0B1020]/60 backdrop-blur-md">
            <div>
              <h3 className="text-xl font-semibold mb-1">Starter</h3>
              <p className="text-slate-400 text-sm mb-4">For most businesses that want to optimize web queries</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> All Limited Links</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Own Analytics Platform</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Chat Support</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Unlimited Users</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 text-center">
              <div className="text-2xl font-bold mb-3">Free</div>
              <button className="rounded-full border border-white/10 bg-gradient-to-r from-purple-400 to-cyan-400 text-sm px-6 py-2 font-medium hover:scale-[1.03] transition">Get Started</button>
            </div>
          </div>

          {/* Popular */}
          <div className="rounded-2xl border-2 border-yellow-400 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between bg-[#0B1020]/60 backdrop-blur-md">
            <div>
              <h3 className="text-xl font-semibold mb-1">Popular</h3>
              <p className="text-slate-400 text-sm mb-4">Invite & collaborate with other managers.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" /> All Limited Links</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" /> Own Analytics Platform</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" /> Chat Support</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" /> Unlimited Users</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 text-center">
              <div className="text-2xl font-bold mb-3">$29.99</div>
              <button className="rounded-full border border-white/10 bg-gradient-to-r from-purple-400 to-cyan-400 text-sm px-6 py-2 font-medium hover:scale-[1.03] transition">Get Started</button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between bg-[#0B1020]/60 backdrop-blur-md">
            <div>
              <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-4">Assign & track your team's progress visually</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-400" /> All Limited Links</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-400" /> Own Analytics Platform</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-400" /> Chat Support</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-400" /> Unlimited Users</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 text-center">
              <div className="text-2xl font-bold mb-3">$39.99</div>
              <button className="rounded-full border border-white/10 bg-gradient-to-r from-purple-400 to-cyan-400 text-sm px-6 py-2 font-medium hover:scale-[1.03] transition">Get Started</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side Text */}
          <div>
            <h3 className="text-3xl font-bold leading-tight">
              Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">Questions?</span><br />
              We have Answers!
            </h3>
            <p className="text-slate-400 mt-3 text-sm max-w-md">
              Don't find your answer here? Just send us a message for any query.
            </p>
            <button className="mt-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>

          {/* Right Side FAQ */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-white/10 pb-2 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">{item.q}</p>
                  <FaChevronDown
                    className={`transition-transform ${
                      openIndex === i ? "rotate-180 text-cyan-400" : "text-white/70"
                    }`}
                  />
                </div>
                {openIndex === i && (
                  <p className="mt-2 text-sm text-slate-300">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
