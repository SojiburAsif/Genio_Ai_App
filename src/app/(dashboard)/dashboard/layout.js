import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | QumAI",
  description: "Manage your AI content and settings from your dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#050615] text-white">
      <Sidebar />
      <main className="flex-1 p-10 bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615]">
        {children}
      </main>
    </div>
  );
}
