import { UserPlus, CreditCard, CalendarCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
    {
        id: 1,
        icon: UserPlus,
        title: "John Doe registered",
        time: "5 mins ago",
    },
    {
        id: 2,
        icon: CalendarCheck,
        title: "Maria Santos checked in",
        time: "15 mins ago",
    },
    {
        id: 3,
        icon: CreditCard,
        title: "Kevin Cruz renewed membership",
        time: "1 hour ago",
    },
    {
        id: 4,
        icon: CalendarCheck,
        title: "Anna Reyes checked in",
        time: "2 hours ago",
    },
];

export default function RecentActivity() {
    return (
        <Card className="h-full shadow-sm border-white bg-white hover:shadow-lg transition-all">
            <CardHeader className="p-4">
                <CardTitle>
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent className="max-h-[350px] overflow-y-auto p-4">
                <div className="space-y-4">
                    {activities.map((activity) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={activity.id}
                                className="flex items-start gap-3 pb-4 border-b border-gray-500 last:border-b-0"
                            >
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Icon
                                        size={16}
                                        className="text-blue-600"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        {activity.title}
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}