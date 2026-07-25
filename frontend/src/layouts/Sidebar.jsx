import { LayoutDashboard, Users, CreditCard, CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const baseClass ="flex items-center gap-3 px-4 py-3 rounded-lg transition-all";
    const navLinkClass = ({ isActive }) =>
    [
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
        isActive
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800",
    ].join(" ");

    return (
        <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
            <h2 className="text-2xl font-bold text-blue-400 mb-10">
                Gym Bro
            </h2>

            <nav className="space-y-2">
                <NavLink to="/dashboard" className={navLinkClass}>
                    <LayoutDashboard size={18} /> Dashboard
                </NavLink>

                <NavLink to="/members" className={navLinkClass}>
                    <Users size={18} /> Members
                </NavLink>

                <NavLink to="/plans" className={navLinkClass}>
                    <CreditCard size={18} /> Membership Plans
                </NavLink>

                <NavLink to="/attendance" className={navLinkClass}>
                    <CalendarDays size={18} /> Attendance
                </NavLink>
            </nav>
        </div>
    );
}