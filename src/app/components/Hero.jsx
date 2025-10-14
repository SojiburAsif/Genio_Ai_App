"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { FaStar, FaCog, FaLock, FaRegClock } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/lottie/Animation - 1751962128393.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => {
                console.error("Failed to load Lottie JSON:", err);
            });
    }, []);

    // 🎯 Icon floating animation - amplitude increased
    const iconFloat = {
        animate: { y: [0, -25, 0] }, // increased from -10 → -25
        transition: {
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    };

    const headingVariant = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 relative mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left column: Text */}
                    <div className="lg:col-span-6">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                            initial="hidden"
                            animate="show"
                            variants={headingVariant}
                        >
                            <span>High-Quality Way</span>
                            <br />
                            <span className="block">to write your</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-yellow-300 to-purple-400">
                                <Typewriter
                                    words={[
                                        "Blog posts",
                                        "Marketing copy",
                                        "Social captions",
                                        "Product descriptions",
                                        "Email newsletters",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={75}
                                    deleteSpeed={40}
                                    delaySpeed={1800}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mt-5 max-w-xl text-slate-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                        >
                            Genio helps you create high-quality content - blogs, ads, social posts, and emails faster using AI.
                            Save drafts, export markdown, and reuse templates to ship content consistently.
                        </motion.p>

                        <motion.div
                            className="mt-6 flex flex-wrap gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45, duration: 0.6 }}
                        >
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column: Lottie animation */}
                    <div className="relative lg:col-span-6 flex justify-center lg:justify-end">
                        <motion.div
                            className="relative w-[320px] md:w-[480px] lg:w-[620px] aspect-[16/9] rounded-2xl overflow-hidden"
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {animationData ? (
                                <Lottie
                                    animationData={animationData}
                                    loop={true}
                                    autoplay={true}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="text-slate-400">Loading animation…</div>
                                </div>
                            )}

                            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>

                {/* Floating decorative icons */}
                <div aria-hidden className="pointer-events-none">
                    <motion.div
                        className="absolute left-16 top-10"
                        animate={iconFloat.animate}
                        transition={iconFloat.transition}
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm shadow-lg p-3">
                            <FaStar className="text-yellow-300 text-xl" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute left-24 bottom-10"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/8 shadow-lg p-2.5">
                            <FaRegClock className="text-sky-300 text-lg" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute right-40 top-8"
                        animate={{ y: [0, -22, 0] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 shadow-lg p-3">
                            <FaCog className="text-emerald-300 text-xl" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute right-12 bottom-20"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/8 shadow-lg p-2.5">
                            <FaLock className="text-rose-300 text-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
