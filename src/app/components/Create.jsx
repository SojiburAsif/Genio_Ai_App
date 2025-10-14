"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaRegLightbulb,
  FaRegCheckCircle,
  FaChevronRight,
} from "react-icons/fa";

export default function Create() {
  // motion variants
  const stepItem = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] text-white py-16">
      <div className="mx-auto max-w-7xl px-6">

    

        {/* main content (unchanged for now) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* left illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[520px]">
              <Image
                src="/service-1.svg"
                alt="Create content illustration"
                width={520}
                height={520}
                style={{ objectFit: "contain" }}
                priority
              />
              <div
                className="absolute -inset-6 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(closest-side, rgba(99,102,241,0.15), transparent 40%)",
                  zIndex: -1,
                }}
              />
            </div>
          </div>

          {/* right text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Create Content in Single Click with AI Power
            </h2>

            <p className="mt-4 max-w-xl text-slate-300">
              Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just a few seconds.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-2xl text-emerald-400">
                  <FaRegCheckCircle />
                </span>
                <span className="text-slate-100">Let's communicate with your customers with emotions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-2xl text-emerald-400">
                  <FaRegCheckCircle />
                </span>
                <span className="text-slate-100">Start creating powerful content for your next ads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-2xl text-emerald-400">
                  <FaRegCheckCircle />
                </span>
                <span className="text-slate-100">Settle your content pipeline in minutes</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/dashboard"
                className="inline-block rounded-full border border-transparent bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.02] transition-transform"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
