import StatisticsCard from "@/pages/Cards/Statistics";
import AttendanceChart from "@/pages/Charts/AttendanceChart";
import RecentActivity from "@/pages/RecentActivity";
import { Users, CreditCard, CalendarDays, HandCoins, UserCheck, AlertTriangle, UserPlus } from "lucide-react";


export default function Dashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatisticsCard
                    title="Total Members"
                    value="1,250"
                    subvalue="+12 this week"
                    icon={Users}
                    iconBg="bg-blue-100"
                    iconColor="text-blue-600"
                />

                <StatisticsCard
                    title="Active Members"
                    value="1,120"
                    subvalue="89% active"
                    icon={UserCheck}
                    iconBg="bg-green-100"
                    iconColor="text-green-600"
                />

                <StatisticsCard
                    title="Expiring Soon"
                    value="35"
                    subvalue="Next 7 days"
                    icon={AlertTriangle}
                    iconBg="bg-orange-100"
                    iconColor="text-orange-600"
                />

                <StatisticsCard
                    title="New This Month"
                    value="18"
                    subvalue="+5 from last month"
                    icon={UserPlus}
                    iconBg="bg-purple-100"
                    iconColor="text-purple-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <AttendanceChart />
                </div>

                <RecentActivity />
            </div>
        </div>
    );
}