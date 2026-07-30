import { LayoutDashboard, Users, CreditCard, CalendarDays, Dumbbell } from "lucide-react";
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
                {/* <Dumbbell className="h-5 w-5 text-blue-500" /> Gym Bro */}

                <div className="flex flex-row">
                    <div className="flex flex-col mr-2">
                        <Dumbbell className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        Gym Bro
                    </div>
                </div>
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