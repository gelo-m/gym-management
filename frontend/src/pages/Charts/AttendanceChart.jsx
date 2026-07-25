import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const attendanceData = [
    { day: "Mon", count: 45 },
    { day: "Tue", count: 52 },
    { day: "Wed", count: 61 },
    { day: "Thu", count: 58 },
    { day: "Fri", count: 72 },
    { day: "Sat", count: 80 },
    { day: "Sun", count: 44 },
];

export default function AttendanceChart() {
    const maxAttendance = Math.max(
        ...attendanceData.map(item => item.count)
    );

    return (
        <Card className="h-full shadow-sm border-white bg-white hover:shadow-lg transition-all">
            <CardHeader className="p-4">
                <CardTitle>
                    Weekly Attendance
                    <p className="text-sm text-slate-500">
                        Last 7 days check-ins
                    </p>
                </CardTitle>
            </CardHeader>

            <CardContent className="p-4">
                <div className="space-y-4">
                    {attendanceData.map((item) => (
                        <div
                            key={item.day}
                            className="flex items-center gap-4"
                        >
                            <div className="w-10 text-sm font-medium">
                                {item.day}
                            </div>

                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{
                                        width: `${(item.count / maxAttendance) * 100}%`,
                                    }}
                                />
                            </div>

                            <div className="w-10 text-right text-sm font-semibold">
                                {item.count}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}