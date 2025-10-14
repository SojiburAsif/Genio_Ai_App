"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegFileAlt,
  FaSearch,
  FaFeatherAlt,
  FaIdBadge,
  FaBullseye,
  FaRecycle,
  FaPenFancy,
  FaChartLine,
  FaBrain,
  FaCogs,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Plagiarism Checker",
    desc: "Ensure originality and avoid duplication instantly.",
    icon: FaRegFileAlt,
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    desc: "Boost your ranking with AI-powered SEO insights.",
    icon: FaSearch,
  },
  {
    id: 3,
    title: "Content Generator",
    desc: "Generate engaging articles, blogs, and posts in seconds.",
    icon: FaFeatherAlt,
  },
  {
    id: 4,
    title: "Digital Name Generator",
    desc: "Create catchy names for brands, startups, and products.",
    icon: FaIdBadge,
  },
  {
    id: 5,
    title: "Ad Targeting Tips",
    desc: "Get AI suggestions to optimize your ad campaigns.",
    icon: FaBullseye,
  },
  {
    id: 6,
    title: "Content Rewriter",
    desc: "Rephrase text intelligently to sound fresh and unique.",
    icon: FaRecycle,
  },
];

// extra features for modal
const extraFeatures = [
  {
    id: 7,
    title: "Creative Writing Assistant",
    desc: "Helps you craft stories, poems, and scripts effortlessly.",
    icon: FaPenFancy,
  },
  {
    id: 8,
    title: "AI Trend Analyzer",
    desc: "Find trending topics across platforms with AI insights.",
    icon: FaChartLine,
  },
  {
    id: 9,
    title: "Smart Idea Generator",
    desc: "Brainstorm ideas based on your keywords and niche.",
    icon: FaBrain,
  },
  {
    id: 10,
    title: "Workflow Automation",
    desc: "Streamline repetitive writing tasks using smart automation.",
    icon: FaCogs,
  },
];

export default function Generate() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] text-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            AI Generate content in seconds
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            QumAI offers powerful AI tools to create, optimize, and inspire — all in one place.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 20px 45px rgba(2,6,23,0.7)",
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl p-[2px] h-[260px]"
              >
                {/* Gradient border only */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-300 via-yellow-300 to-purple-400 opacity-70"></div>

                {/* Card content */}
                <div className="relative h-full rounded-2xl bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] p-8 flex flex-col justify-between border border-transparent">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-purple-300" />
                    <div>
                      <h3 className="text-lg font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <div className="flex items-center gap-3 text-white/80">
                      <span className="text-sm">Learn</span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-[rgba(255,255,255,0.03)]">
                        <FaArrowRight className="text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-white/5 px-6 py-2 text-sm font-medium border border-white/10 hover:scale-[1.03] transition"
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-8 max-w-4xl w-full mx-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">More AI Features</h3>
                <button onClick={() => setShowModal(false)}>
                  <FaTimes className="text-white/70 hover:text-white text-lg" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {extraFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.id}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-b from-[#0C1428]/60 to-[#080C1B]/60 border border-white/10"
                    >
                      <Icon className="w-7 h-7 text-yellow-300" />
                      <div>
                        <h4 className="text-base font-semibold">{f.title}</h4>
                        <p className="text-sm text-slate-300 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full bg-white/10 hover:bg-white/20 px-5 py-2 text-sm font-medium transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
