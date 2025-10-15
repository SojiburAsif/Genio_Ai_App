"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 2200);
  };

  // 🎞️ Social icon floating animation (only for socials)
  const socialFloat = (delay = 0) => ({
    animate: { y: [0, -6, 0] },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <footer
      className="relative text-white"
      style={{
        background: "linear-gradient(180deg,#071025 0%, #050615 60%)",
      }}
    >
      {/* Subscribe Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/8 p-6 flex flex-col md:flex-row items-center gap-4">
          {/* ✅ Static (No Animation) */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-violet-400 text-black/90">
              <FaHeadset className="w-6 h-6" />
            </div>

            <div>
              <div className="text-sm text-slate-200">Have a question? Call us 24/7</div>
              <div className="text-lg md:text-2xl font-bold">+1 (707) 797 0462</div>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 md:flex-none md:w-[480px] rounded-full bg-[#0A0F1C]/70 border border-white/6 px-5 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="submit"
              className="rounded-full bg-white text-black px-5 py-2.5 font-medium shadow-lg hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mt-3 md:mt-0 ml-4 text-sm text-emerald-300">
              Thanks — Subscribed!
            </div>
          )}
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            {/* ✅ Static (No Animation) */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-yellow-300 to-pink-400 flex items-center justify-center text-black font-bold">
                G
              </div>
              <div className="text-lg font-semibold">Genio</div>
            </div>

            <p className="text-slate-300 max-w-sm">
              We provide one-stop solutions for all AI content needs; your creativity is just a click away.
            </p>

            {/* 🌐 Socials (Animated Floating) */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: FaFacebookF, delay: 0 },
                { Icon: FaTwitter, delay: 0.2 },
                { Icon: FaInstagram, delay: 0.4 },
                { Icon: FaYoutube, delay: 0.6 },
                { Icon: FaGithub, delay: 0.8 },
                { Icon: FaLinkedin, delay: 1.0 },
              ].map(({ Icon, delay }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  {...socialFloat(delay)}
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-white/90 hover:scale-110 transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/service" className="hover:text-white transition">Service</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/features" className="hover:text-white transition">Feature</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Artworks</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/artworks/3d" className="hover:text-white transition">3D Artworks</Link></li>
              <li><Link href="/artworks/photo" className="hover:text-white transition">Photography</Link></li>
              <li><Link href="/artworks/illustration" className="hover:text-white transition">Illustrations</Link></li>
              <li><Link href="/artworks/videos" className="hover:text-white transition">Intro Videos</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/partners" className="hover:text-white transition">Global Partners</Link></li>
              <li><Link href="/forum" className="hover:text-white transition">Forum</Link></li>
              <li><Link href="/virtual" className="hover:text-white transition">Virtual World</Link></li>
              <li><Link href="/brand-assets" className="hover:text-white transition">Brand Assets</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 mt-10 pt-6 text-center text-slate-300">
          Copyright © {new Date().getFullYear()} Genio Inc.
        </div>
      </div>
    </footer>
  );
}
