"use client";

import { FaHome, FaHistory, FaCog, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#060b18] border-r border-white/10 p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-white">QumAI</h2>

      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-3 hover:text-cyan-400 transition">
          <FaHome /> Dashboard
        </Link>
        <Link href="/dashboard/history" className="flex items-center gap-3 hover:text-cyan-400 transition">
          <FaHistory /> History
        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-3 hover:text-cyan-400 transition">
          <FaCog /> Settings
        </Link>
        <Link href="/dashboard/profile" className="flex items-center gap-3 hover:text-cyan-400 transition">
          <FaUser /> Profile
        </Link>
      </nav>
    </aside>
  );
}
