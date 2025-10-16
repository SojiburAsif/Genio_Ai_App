"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`
        fixed top-4 left-1/2 z-50
        -translate-x-1/2
        w-[95%] md:w-[90%]
        rounded-2xl border
        bg-white/60 backdrop-blur-xl
        dark:bg-slate-900/70 dark:border-slate-800
        shadow-lg transition-all duration-300
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-slate-900 dark:text-white"
            >
              {/* Logo */}
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

            {/* Desktop Nav */}
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

              {/* Dropdown */}
              <div className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  DAO <FaChevronDown size={14} />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white dark:bg-slate-800 rounded-md z-[1] w-48 p-2 shadow border dark:border-slate-700"
                >
                  <li>
                    <Link href="/dao/create">Create DAO</Link>
                  </li>
                  <li>
                    <Link href="/dao/explore">Explore DAOs</Link>
                  </li>
                </ul>
              </div>

              <Link
                href="/docs"
                className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Docs
              </Link>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex items-center justify-center rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" size={18} />
              ) : (
                <FaMoon className="text-slate-600" size={18} />
              )}
            </button>

            {/* Auth Links */}
            <div className="hidden md:flex items-center gap-3">
            
              <Link
                href="/signup"
                className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-slate-700 dark:border-slate-700"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white/90 py-4 dark:bg-slate-900/90 rounded-b-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <Link href="/dao/explore" className="block px-3 py-2 rounded-md">
                Explore DAOs
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
