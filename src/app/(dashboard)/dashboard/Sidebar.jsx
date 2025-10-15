"use client";

import { FaHome, FaHistory, FaCog, FaUser, FaPenNib, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  // Demo user info (পরবর্তীতে Firebase/Auth theke dynamic data আনতে পারো)
  const user = {
    name: "Sojibur Rahman",
    image: "https://i.ibb.co.com/Jw6ktQGL/541f13fb899c.jpg", 
  };

  const handleLogout = () => {
    // 🔹 Future: Firebase signOut() এখানে কল করতে পারো
    console.log("User logged out");
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] border-r border-white/10 p-6 flex flex-col">
      {/* Logo */}
      <Link href="/" className="">
      <h2 className="text-2xl font-bold mb-5 text-white tracking-wide">
       <img src="https://i.ibb.co.com/rKYTfgkV/Gemini-Generated-Image-wbd8siwsiwbd8.png" alt="" />
      </h2></Link>

      {/* Navigation */}
      <nav className="space-y-4 flex-1">
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
        >
          <FaHome /> Home
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
        >
          <FaPenNib /> Dashboard
        </Link>

        <Link
          href="/dashboard/history"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
        >
          <FaHistory /> History
        </Link>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
        >
          <FaCog /> Settings
        </Link>

        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
        >
          <FaUser /> Profile
        </Link>
      </nav>

      {/* User Info + Logout */}
      <div className="mt-auto border-t border-white/10 pt-5">
  <div className="flex items-center gap-4 mb-4">
    <img
      src="https://i.ibb.co.com/Jw6ktQGL/541f13fb899c.jpg"
      alt={user.name}
      className="w-14 h-14 rounded-full border-2 border-cyan-400/20 object-cover shadow-md"
    />
    <div>
      <p className="text-sm font-semibold text-white">{user.name}</p>
      <p className="text-xs text-slate-400">Pro Member</p>
    </div>
  </div>

  <button
    onClick={handleLogout}
    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1a35] hover:bg-[#0f2a4d] text-slate-300 hover:text-cyan-400 transition"
  >
    <FaSignOutAlt /> Logout
  </button>
</div>

    </aside>
  );
}
