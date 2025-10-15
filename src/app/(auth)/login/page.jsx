"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaGoogle, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const [usePhone, setUsePhone] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    setTimeout(() => {
      alert(`✅ Logged in with ${usePhone ? "phone" : "email"}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] p-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Sign in to continue to <span className="text-cyan-400">Genio</span>
          </p>
        </div>

        {/* Toggle Login Type */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setUsePhone(false)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              !usePhone
                ? "bg-cyan-500 text-black"
                : "bg-transparent text-slate-300 border border-white/10"
            }`}
          >
            Email Login
          </button>
          <button
            onClick={() => setUsePhone(true)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              usePhone
                ? "bg-cyan-500 text-black"
                : "bg-transparent text-slate-300 border border-white/10"
            }`}
          >
            Phone Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {!usePhone ? (
            <>
              {/* Email */}
              <div>
                <label className="text-slate-300 text-sm flex items-center gap-2 mb-1">
                  <FaEnvelope className="text-cyan-400" /> Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1327]/60 border border-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-rose-300 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-slate-300 text-sm flex items-center gap-2 mb-1">
                  <FaLock className="text-cyan-400" /> Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1327]/60 border border-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
                {errors.password && (
                  <p className="text-xs text-rose-300 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Phone Number */}
              <div>
                <label className="text-slate-300 text-sm flex items-center gap-2 mb-1">
                  <FaPhone className="text-cyan-400" /> Phone Number
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1327]/60 border border-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-300 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-white/10" />
          <div className="text-xs text-slate-400">or continue with</div>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => alert("🔐 Google Sign-in coming soon!")}
          className="w-full flex items-center justify-center gap-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200"
        >
          <FaGoogle className="text-cyan-400" /> Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-slate-400 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Create one
          </a>
        </p>
      </motion.div>
    </div>
  );
}
