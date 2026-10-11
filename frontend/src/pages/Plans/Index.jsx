import { useState, useEffect } from "react";
import { createColumns } from "./Components/Columns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, UserCheck, AlertTriangle, UserPlus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DataTable from "@/components/DataTable/DataTable";
import StatisticsCard from "@/pages/Cards/Statistics";
import ConfirmDialog from "../../components/dialogs/ConfirmDialog";
import { getPlans, deletePlan } from "@/services/planService";

export default function Plans() {
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        keyword: '',
        status: '',
    });
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [mode, setMode] = useState("create");
    const [plansData, setPlansData] = useState([]);
    const [metaData, setMetaData] = useState({});
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [sortBy, setSortBy] = useState("id");
    const [sortDirection, setSortDirection] = useState("desc");

    const handleAction = (action, plan) => {
        switch (action) {
            case "Edit":
                setMode("edit");
                setSelectedPlan(plan);
                setOpenDialog(true);
                break;
            case "View":
                break;
            case "Delete":
                setSelectedPlan(plan);
                setOpenDeleteDialog(true);
                break;
        }
    }

    const handleSort = (column) => {

        let direction = "asc";
    
        if (sortBy === column && sortDirection === "asc") {
            direction = "desc";
        }
    
        setSortBy(column);
        setSortDirection(direction);
    
        fetchPlans(page, filters, column, direction);
    }

    const columns = createColumns(handleAction, handleSort, sortBy, sortDirection);

    const handleDeleteConfirm = async () => {
        try {
            await deletePlan(selectedPlan.id);
            await fetchPlans();
    
            setOpenDeleteDialog(false);
            setSelectedPlan(null);
    
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPlans(1, filters, sortBy, sortDirection);
    }, []);

    const fetchPlans = async (
        page = 1,
        filters = {},
        sortByParam = sortBy,
        sortDirectionParam = sortDirection
    ) => {
        try {
            const response = await getPlans(page, filters, sortByParam, sortDirectionParam);

            setPlansData(response.data.data);
            setMetaData(response.data.meta);

        } catch (error) {
            console.error(error);
        }
    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
        fetchPlans(newPage);
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Plans</h1>
                </div>
            </div>

            <Card className="shadow-sm border-white bg-white hover:shadow-lg transition-all">         
                {/* <CardHeader className="p-6">
                    <CardTitle>
                        Plan List
                    </CardTitle>

                    <CardDescription>
                        Manage gym plans
                    </CardDescription>
                </CardHeader> */}
                <CardContent className="p-6">

                    <DataTable
                        columns={columns}
                        data={plansData}
                        metaData={metaData}
                        page={page}
                        onPageChange={handlePageChange}
                    />
                </CardContent>
            </Card>

        </div>
    );
}