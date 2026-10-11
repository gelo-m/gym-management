import { initials } from "../../../utils/formatter.jsx"
import { MoreHorizontal, ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const createColumns = (handleAction, handleSort, sortBy, sortDirection) => [
    {
        accessorKey: "code",
        header: () => (
            <button
                onClick={() =>
                    handleSort("code")
                }
                className="flex items-center gap-2"
            >
                Code
                {
                    sortBy === "code"
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
        header: "Name"
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "time_duration",
        header: "Time Duration"
    },
    {
        accessorKey: "price",
        header: "Price"
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