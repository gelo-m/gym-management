import DataTable from "@/components/DataTable/DataTable";
import { columns } from "./Components/Columns";
import { members, status } from "./Components/MemberData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StatisticsCard from "@/pages/Cards/Statistics";
import {
    Users,
    UserCheck,
    AlertTriangle,
    UserPlus,
    Search
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


export default function Members() {

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Members</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
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

            <Card className="shadow-sm border-white bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                    <div className="flex justify-between mb-6">
                        <div className="flex justify-normal mb-6 gap-2">
                            <div className="w-80">
                                <Input className="!h-10" placeholder="Search members..." />
                            </div>
                            <div className="w-80">
                                <Select>
                                    <SelectTrigger className="w-full lg:w-48 !h-10">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>

                                    <SelectContent className="bg-slate-500">
                                        {
                                            status.map((item) => (
                                                <SelectItem className="text-white bg-gray-500 pl-3 !h-10 border-gray-500" value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <Button className="bg-blue-500 text-white !h-10">
                                Add Member
                            </Button>
                        </div>

                        {/* <div className="flex gap-2">
                            <Select>
                                <SelectTrigger className="w-full lg:w-48">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    {
                                        status.map((item) => (
                                            <SelectItem value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <Button>
                                Add Member
                            </Button>
                        </div> */}
                    </div>

                    <DataTable columns={columns} data={members} />

                </CardContent>
            </Card>
        </div>
    );
}