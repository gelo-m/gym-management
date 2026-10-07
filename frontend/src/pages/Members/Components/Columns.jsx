import { initials } from "../../../utils/formatter.jsx"
import { MoreHorizontal, ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { actions } from "./MemberData";

export const createColumns = (handleAction, handleSort, sortBy, sortDirection) => [
    {
        accessorKey: "member_no",
        header: () => (
            <button
                onClick={() =>
                    handleSort("member_no")
                }
                className="flex items-center gap-2"
            >
                Member No
                {
                    sortBy === "member_no"
                        ? sortDirection === "asc"
                            ? <ArrowUp className="ml-2 h-4 w-4" />
                            : <ArrowDown className="ml-2 h-4 w-4" />
                        : <ArrowUpDown className="ml-2 h-4 w-4" />
                }
            </button>
        ),
    },
    {
        accessorKey: "name",
        header: () => (
            <button
                onClick={() =>
                    handleSort("first_name")
                }
                className="flex items-center gap-2"
            >
                Name
                {
                    sortBy === "first_name"
                        ? sortDirection === "asc"
                            ? <ArrowUp className="ml-2 h-4 w-4" />
                            : <ArrowDown className="ml-2 h-4 w-4" />
                        : <ArrowUpDown className="ml-2 h-4 w-4" />
                }
            </button>
        ),
        cell: ({ row }) => {
            const setInitial = initials(row.original);
            return (
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarFallback>
                            {setInitial.avatar}
                        </AvatarFallback>
                    </Avatar>
    
                    <span className="font-medium">
                        {setInitial.name}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "mobile_number",
        header: "Mobile Number"
    },
    {
        accessorKey: "plan",
        header: "Plan"
    },
    {
        accessorKey: "joined_at",
        header: "Start Date"
    },
    {
        accessorKey: "expiry_date",
        header: "Expiry Date"
    },
    {
        accessorKey: "status",
        cell: ({ row }) => {
            const status = row.original.status_label;

            return (
                <Badge
                    className={
                        status === "Active"
                            ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100 rounded-full px-3 py-1"
                            : "bg-red-100 text-red-700 border-red-200 hover:bg-red-100 rounded-full px-3 py-1"
                    }
                >
                    {status}
                </Badge>
            );
        },
        header: () => (
            <button
                onClick={() =>
                    handleSort("status")
                }
                className="flex items-center gap-2"
            >
                Status
                {
                    sortBy === "status"
                        ? sortDirection === "asc"
                            ? <ArrowUp className="ml-2 h-4 w-4" />
                            : <ArrowDown className="ml-2 h-4 w-4" />
                        : <ArrowUpDown className="ml-2 h-4 w-4" />
                }
            </button>
        ),
    },
    {
        accessorKey: "Actions",
        id: "actions",
        cell: ({ row }) => {        
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-slate-100">
                            <MoreHorizontal className="h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
        
                    <DropdownMenuContent align="end" className="bg-white border border-slate-200 shadow-lg">
                        {
                            actions.map((item) => (
                                    <DropdownMenuItem 
                                        key={item.value}
                                        className={item.className}
                                        onClick={() => handleAction(item.action, row.original)}
                                    >
                                        {item.label}
                                    </DropdownMenuItem>
                                )
                            )
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];