"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function SignupPage() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      alert(`✅ Account created for ${values.name}`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] p-6">
      {/* Back to Home */}
      <Link
        href="/"
        className="flex items-center gap-2 mb-6 text-slate-400 hover:text-cyan-400 transition"
      >
        <FaHome className="text-cyan-400" />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-white tracking-wide">
            Create your account
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Join <span className="text-cyan-400">Genio</span> and start creating smarter content.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-slate-300 text-sm flex items-center gap-2 mb-1">
              <FaUser className="text-cyan-400" /> Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-[#0a1327]/60 border border-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-xs text-rose-300 mt-1">{errors.name.message}</p>
            )}
          </div>

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
              <p className="text-xs text-rose-300 mt-1">{errors.email.message}</p>
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
                minLength: { value: 6, message: "At least 6 characters" },
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

          {/* Confirm Password */}
          <div>
            <label className="text-slate-300 text-sm flex items-center gap-2 mb-1">
              <FaLock className="text-cyan-400" /> Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-[#0a1327]/60 border border-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-rose-300 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Signup Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:opacity-90 transition"
          >
            {loading ? "Creating account..." : "Sign up"}
          </motion.button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-white/10" />
          <div className="text-xs text-slate-400">or continue with</div>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

      
        <button
          type="button"
          onClick={() => alert("Google Sign-up coming soon!")}
          className="w-full flex items-center justify-center gap-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200"
        >
          <FaGoogle className="text-cyan-400" /> Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
}
