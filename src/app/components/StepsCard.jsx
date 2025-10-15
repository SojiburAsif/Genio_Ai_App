"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaRegClock,
  FaRegCheckCircle,
  FaChevronRight,
} from "react-icons/fa";

const stepVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Step({ Icon, color, title, subtitle, showArrow = true }) {
  return (
    <motion.div
      variants={stepVariants}
      whileHover={{ translateY: -8 }}
      className="relative flex flex-col items-start text-left gap-5 p-12"
    >
      {/* ICON */}
      <motion.div whileHover={{ scale: 1.08 }}>
        <Icon style={{ color }} className="w-10 h-10" />
      </motion.div>

      {/* TEXT */}
      <div>
        {/* 🔹 Bigger Title */}
        <div className="text-2xl md:text-2xl font-bold text-white tracking-tight">
          {title}
        </div>

        {/* 🔹 Subtitle stays smaller */}
        <div className="text-base md:text-sm text-slate-300 mt-3 leading-relaxed max-w-">
          {subtitle}
        </div>
      </div>

      {/* ARROW (centered between steps) */}
      {showArrow && (
        <div className="hidden md:flex items-center justify-center absolute top-1/2 -right-5 transform -translate-y-1/2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0b1220] border border-white/10 shadow-md">
            <FaChevronRight className="text-white/70 w-5 h-5" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function StepsSection() {
  return (
    <section className=" text-white py-10 md:py-18 ">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-20"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#061226]/60 to-[#07182a]/60 backdrop-blur-md p-3 relative">
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative">
                <Step
                  Icon={FaRegLightbulb}
                  color="rgb(139,92,246)"
                  title="Select a writing template"
                  subtitle="Choose from a variety of ready-made templates designed for blogs, captions, or social media posts."
                  showArrow={true}
                />

                <Step
                  Icon={FaRegClock}
                  color="rgb(34,211,238)"
                  title="Describe your topic"
                  subtitle="Tell our AI what you want to write about in just a few words or sentences - we’ll handle the rest."
                  showArrow={true}
                />

                <Step
                  Icon={FaRegCheckCircle}
                  color="rgb(236,72,153)"
                  title="Generate quality content"
                  subtitle="Our AI engine quickly generates engaging, high-quality content that fits your tone and purpose."
                  showArrow={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
