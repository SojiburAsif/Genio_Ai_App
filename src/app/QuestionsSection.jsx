"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is AI content writing tool?",
      a: "It’s an AI-powered system that helps generate content instantly using advanced GPT models.",
    },
    {
      q: "How do you different criteria in your process?",
      a: "We analyze the tone, topic, and structure to tailor each output accordingly.",
    },
    {
      q: "How can I invest money here?",
      a: "You can subscribe through our pricing plans securely using Stripe or other gateways.",
    },
    {
      q: "How can I trade my crypto into different currency?",
      a: "We currently don’t support crypto, but fiat and card payments are accepted.",
    },
    {
      q: "How can I accept credit cards online?",
      a: "Simply integrate Stripe or PayPal for easy and secure credit card payments.",
    },
  ];

  return (
    <section className=" text-white py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE — Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold leading-tight mb-4">
            Any{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
              Questions?
            </span>{" "}
            <br />
            We have Answers!
          </h3>
          <p className="text-slate-400 mt-4 text-lg max-w-md leading-relaxed">
            Don’t find your answer here? Just send us a message for any query.
          </p>
          <button className="mt-8 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-base hover:bg-white/10 transition">
            Contact Us
          </button>
        </motion.div>

        {/* RIGHT SIDE — Animated FAQ */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <p
                  className={`font-semibold text-xl transition-colors duration-300 ${
                    openIndex === i ? "text-cyan-400" : "text-white"
                  }`}
                >
                  {item.q}
                </p>
                <FaChevronDown
                  className={`transition-transform duration-300 text-xl ${
                    openIndex === i
                      ? "rotate-180 text-cyan-400"
                      : "text-white/70"
                  }`}
                />
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-slate-300 text-lg leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
