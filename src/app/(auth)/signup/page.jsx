"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Welcome to <span className="text-cyan-400">Genio</span> ✨
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Sign in with your preferred account to continue
          </p>
        </div>

        {/* Google Login */}
        <button
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200 font-medium mb-4"
        >
          <FaGoogle className="text-cyan-400 text-lg" />
          Continue with Google
        </button>

        {/* GitHub Login */}
        <button
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200 font-medium"
        >
          <FaGithub className="text-cyan-400 text-lg" />
          Continue with GitHub
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-slate-500 mt-8">
          By continuing, you agree to Genio’s{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
}
