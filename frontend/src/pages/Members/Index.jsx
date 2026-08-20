import { useState } from "react";
import DataTable from "@/components/DataTable/DataTable";
import { createColumns } from "./Components/Columns";
import ConfirmDialog from "../../components/dialogs/ConfirmDialog";
import { members, status } from "./Components/MemberData.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import StatisticsCard from "@/pages/Cards/Statistics";
import {
    Users,
    UserCheck,
    AlertTriangle,
    UserPlus
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DataTablePagination from "@/components/DataTable/DataTablePagination";
import MemberDialog from "./MemberDialog";

export default function Members() {
    const [page, setPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [mode, setMode] = useState("create");
    const [membersData, setMembersData] = useState(members);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleAction = (rowIndex, action, member) => {
        switch (action) {
            case "Edit":
                setMode("edit");
                setSelectedMember(member);
                setOpenDialog(true);
                break;
            case "View":
                break;
            case "Delete":
                setSelectedMember(member);
                setSelectedIndex(rowIndex);
                setOpenDeleteDialog(true);
                break;
        }
    }

    const columns = createColumns (handleAction);

    const handleDeleteConfirm = () => {
        setMembersData(
            membersData.filter(
                (_, index) => index !== selectedIndex
            )
        );
    
        setOpenDeleteDialog(false);
        setSelectedMember(null);
        setSelectedIndex(null);
    };
    
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
                <CardHeader className="p-6">
                    <CardTitle>
                        Members List
                    </CardTitle>

                    <CardDescription>
                        Manage gym members and memberships
                    </CardDescription>
                </CardHeader>   
                <CardContent className="p-6">
                    <div className="flex justify-between mb-6">
                        <div className="flex justify-normal mb-6 gap-2">
                            <div className="w-80">
                                <Input className="!h-11" placeholder="Search members..." />
                            </div>
                            <div className="w-80">
                                <Select>
                                    <SelectTrigger className="w-full lg:w-48 !h-11">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>

                                    <SelectContent className="bg-white border border-slate-200 shadow-lg">
                                        {
                                            status.map((item) => (
                                                <SelectItem className="pl-3 !h-11 border-gray-500" value={item.value} key={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <Button className="bg-blue-500 text-white !h-10" onClick={() => {
                                setMode("create");
                                setOpenDialog(true);
                            }}>
                                Add Member
                            </Button>
                        </div>
                    </div>
                    <MemberDialog
                        mode={mode}
                        member={selectedMember}
                        open={openDialog}
                        onOpenChange={setOpenDialog}
                    />
                    <DataTable columns={columns} data={membersData} />
                    <DataTablePagination
                        page={page}
                        totalPages={100}
                        onPageChange={setPage}
                    />
                </CardContent>

            </Card>

            <ConfirmDialog
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                title="Delete Member"
                description={`Are you sure you want to delete ${selectedMember?.first_name} ${selectedMember?.last_name}? This action cannot be undone.`}
                confirmText="Delete"
                confirmButtonClass="bg-red-600 hover:bg-red-700"
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
}