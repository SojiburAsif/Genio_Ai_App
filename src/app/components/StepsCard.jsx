"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaRegClock, FaRegCheckCircle, FaChevronRight } from "react-icons/fa";

const stepVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Step({ Icon, color, title, subtitle, showArrow = true }) {
  return (
    <motion.div
      variants={stepVariants}
      whileHover={{ translateY: -6 }}
      className="relative flex flex-col items-start text-left gap-4 p-10"
    >
      {/* ICON */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Icon style={{ color }} className="w-8 h-8" />
      </motion.div>

      {/* TEXT */}
      <div>
        <div className="text-lg font-semibold text-white">{title}</div>
        <div className="text-base text-slate-300 mt-1 leading-relaxed">
          {subtitle}
        </div>
      </div>

      {/* ARROW (center of border) */}
      {showArrow && (
        <div className="hidden md:flex items-center justify-center absolute top-1/2 -right-4 transform -translate-y-1/2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0b1220] border border-white/10 shadow-md"
          >
            <FaChevronRight className="text-white/70 w-5 h-5" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function StepsSection() {
  return (
    <section className="bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] text-white py-8">
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#061226]/60 to-[#07182a]/60 backdrop-blur-md p-2 relative">
            <div className="rounded-2xl overflow-hidden bg-transparent">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative">
                <Step
                  Icon={FaRegLightbulb}
                  color="rgb(139,92,246)" // violet
                  title="Select writing template"
                  subtitle="Simply choose a template from the available list."
                  showArrow={true}
                />

                <Step
                  Icon={FaRegClock}
                  color="rgb(34,211,238)" // cyan
                  title="Describe your topic"
                  subtitle="Provide our AI content writer with a few sentences."
                  showArrow={true}
                />

                <Step
                  Icon={FaRegCheckCircle}
                  color="rgb(236,72,153)" // pink
                  title="Generate quality content"
                  subtitle="Our powerful AI tools will generate your content in seconds."
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
