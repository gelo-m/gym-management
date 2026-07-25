import { Card, CardContent } from "@/components/ui/card";

export default function StatisticsCard({
    title,
    value,
    subvalue,
    icon: Icon,
    iconBg,
    iconColor
}) {
    return (
        <Card className="shadow-sm border-white bg-white hover:shadow-lg transition-all">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500">{title}</p>
                        <h2 className="text-3xl font-bold mt-2">{value}</h2>
                        <p className="text-xs text-green-500 mt-2">{subvalue}</p>
                    </div>
                    <div className={`p-3 rounded-xl ${iconBg}`}>
                        <Icon className={`h-6 w-6 ${iconColor}`}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}