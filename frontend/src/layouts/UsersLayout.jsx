import Sidebar from "@/layouts/Sidebar";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

export default function UserLayout() {
    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}