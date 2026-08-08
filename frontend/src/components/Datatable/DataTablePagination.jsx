import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DataTablePagination({
    page,
    totalPages,
    onPageChange,
}) {
    return (
        <div className="flex items-center justify-between mt-6">
            {/* <p className="text-sm text-slate-500">
                Page {page} of {totalPages}
            </p> */}

            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => onPageChange(page - 1)}
                >
                    Prev
                </Button>

                <Input
                    value={page}
                    onChange={(e) =>
                        onPageChange(Number(e.target.value))
                    }
                    className="w-16 text-center"
                />

                <span className="text-sm text-slate-500">
                    / {totalPages}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => onPageChange(page + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}