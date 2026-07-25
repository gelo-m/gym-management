import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/services/authService";
import { Bell, LogOut } from "lucide-react";


export default function Header() {
    const navigate = useNavigate();
    const { user, setUser, setToken } = useAuth();

    const currentDate = new Date().toLocaleDateString(
        "en-PH", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error);
        }
    
        setUser(null);
        setToken(null);
    
        navigate("/login");
    };

    return (
        <header className="h-18 border border-white border-b bg-white flex items-center justify-between px-6 p-2">
            <div className="mb-1">
                <h1 className="text-3xl font-bold">
                    Welcome back, {user?.name || "Admin"}
                </h1>

                <p className="text-slate-500 mt-2">
                    Here's what's happening in your gym today.
                </p>

                <p className="text-sm text-slate-500">
                    {currentDate}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Bell size={20} />

                {/* <div className="w-9 h-9 rounded-full bg-slate-300" /> */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg
                            text-red-600 hover:bg-red-50 transition"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </header>
    );
}