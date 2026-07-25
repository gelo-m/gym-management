import { Outlet } from "react-router-dom";
import { Dumbbell } from "lucide-react";

export default function AuthLayout() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            {/* Left Branding */}
            <div className="hidden lg:flex flex-col justify-center bg-slate-950 text-white px-20">

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-3">
                Gym Management System
            </span>

            <div className="flex flex-row">
                <div className="flex flex-col mr-2">
                    <Dumbbell className="h-12 w-12 text-blue-500" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold text-blue-500 mb-4">
                        GYM BRO
                    </h1>
                </div>
            </div>
                <p className="text-xl text-slate-300 mb-10">
                    Manage your gym operations in one place.
                    Track members, attendance, memberships,
                    payments, and revenue with ease.
                </p>
            </div>

            {/* Right Login */}
            <div className="flex items-center justify-center bg-slate-100 p-8">
                <Outlet />
            </div>

        </div>
    );
}