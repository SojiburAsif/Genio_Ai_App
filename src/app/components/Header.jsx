"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaUser } from "react-icons/fa";

// If you use shadcn/ui in your project, replace these with actual imports
// import { Button } from "@/components/ui/button";
// import { Avatar } from "@/components/ui/avatar";
// import ThemeToggle from "@/components/ThemeToggle";

/**
 * Genio Header
 * - Responsive header for the Genio app (brand + nav + auth + theme toggle)
 * - TailwindCSS + optional shadcn components
 *
 * Usage: place <Header /> in your root layout (app/layout.tsx) inside the <body>
 */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-sm dark:bg-slate-900/60 dark:border-slate-800">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white">
              {/* Simple SVG mark */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="6"
                  fill="currentColor"
                  className="text-indigo-600 dark:text-indigo-400"
                />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="white"
                >
                  G
                </text>
              </svg>
              <span className="font-semibold text-lg">Genio</span>
            </Link>

            {/* Primary nav - hidden on mobile */}
            <nav className="hidden md:flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Link
                href="/"
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Dashboard
              </Link>
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Pricing
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 rounded-md inline-flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  DAO <FaChevronDown size={14} />
                </button>
                {/* dropdown */}
                <div className="absolute left-0 mt-2 hidden min-w-[180px] rounded-md border bg-white p-2 shadow-lg group-hover:block dark:bg-slate-800">
                  <Link
                    href="/dao/create"
                    className="block px-3 py-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    Create DAO
                  </Link>
                  <Link
                    href="/dao/explore"
                    className="block px-3 py-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    Explore DAOs
                  </Link>
                </div>
              </div>
              <Link
                href="/docs"
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Docs
              </Link>
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* ThemeToggle placeholder - replace with your component */}
            <div className="hidden sm:block">
              {/* If you have ThemeToggle component, replace below */}
              <button
                aria-label="Toggle theme"
                className="rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                🌙
              </button>
            </div>

            {/* Auth area */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:border-slate-700"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white/80 py-4 dark:bg-slate-900/80">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Link href="/" className="block px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md">
                Dashboard
              </Link>
              <Link href="/pricing" className="block px-3 py-2 rounded-md">
                Pricing
              </Link>
              <Link href="/dao/create" className="block px-3 py-2 rounded-md">
                Create DAO
              </Link>
              <Link href="/docs" className="block px-3 py-2 rounded-md">
                Docs
              </Link>
              <div className="pt-2 border-t mt-2">
                <Link href="/login" className="block px-3 py-2 rounded-md">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block mt-2 px-3 py-2 rounded-md border"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
