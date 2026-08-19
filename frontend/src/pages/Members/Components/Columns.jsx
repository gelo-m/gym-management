import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { actions } from "./MemberData";

const initials = (data) => {
    const name = [
        data.first_name,
        data.middle_name,
        data.last_name,
    ]
    .filter(Boolean)
    .join(" ");

    const avatar = [
        data.first_name?.[0],
        data.last_name?.[0],
    ]
    .filter(Boolean)
    .join("")
    .toUpperCase();

    return {name: name, avatar: avatar}
}

export const createColumns = (handleAction) => [
    {
        accessorKey: "member_id",
        header: "Member ID",
    },
    {
        accessorKey: "name",
        header: "Name",
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
        accessorKey: "contact",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
            >
                Contact
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "plan",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
            >
                Plan
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "start_date",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
            >
                Start Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "expiry_date",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
            >
                Expiry Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "status",
        cell: ({ row }) => {
            const status = row.original.status;

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
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
            >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
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
                                        onClick={() => handleAction(row.index, item.action, row.original)}
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