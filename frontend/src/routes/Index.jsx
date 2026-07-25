import { createBrowserRouter } from "react-router-dom";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/auth/Login";
import AdminLayout from "@/layouts/AdminLayout";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import Members from "@/pages/Members/Index";
import Plans from "@/pages/Plans/Index";
import Attendance from "@/pages/Attendance/Index";
import Payments from "@/pages/Payments/Index";

export const router = createBrowserRouter([
    {
        element: <GuestRoute />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "/members",
                        element: <Members />,
                    },
                    {
                        path: "/plans",
                        element: <Plans />,
                    },
                    {
                        path: "/attendance",
                        element: <Attendance />,
                    },
                    {
                        path: "/payments",
                        element: <Payments />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    },
]);