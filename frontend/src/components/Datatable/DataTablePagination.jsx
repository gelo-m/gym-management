import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DataTablePagination({
    metaData,
    page,
    onPageChange,
}) {

    const totalPages = metaData?.last_page ?? 1;
    const totalRecords = metaData?.total ?? 0;

    const handlePageInput = (e) => {
        const value = Number(e.target.value);

        if (
            value >= 1 &&
            value <= totalPages
        ) {
            onPageChange(value);
        }
    };

    return (
        <div className="flex items-center justify-between mt-4 border-t pt-4">

            <div className="text-sm text-slate-500">
                Total Records: {totalRecords}
            </div>

            <div className="flex items-center gap-3">

                <span className="text-sm text-slate-500">
                    Page
                </span>

                <Input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={page}
                    onChange={handlePageInput}
                    className="w-16 h-9 text-center"
                />

                <span className="text-sm text-slate-500">
                    / {totalPages}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={page <= 1}
                    onClick={() => onPageChange(page - 1)}
                >
                    Prev
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= totalPages}
                    onClick={() => onPageChange(page + 1)}
                >
                    Next
                </Button>

            </div>
        </div>
    );
}