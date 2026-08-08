import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function DataTable({
    columns,
    data,
}) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const headers = table.getHeaderGroups()[0].headers;
    const rows = table.getRowModel().rows;

    return (
        <div className="rounded-xl overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow
                        className="
                            border-b
                            border-slate-100
                            hover:bg-slate-50
                            transition-colors"
                        >
                        {
                            headers?.map((header) => (
                                <TableHead className="font-semibold text-slate-700" key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row.id}
                            className="hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                            {
                                row.getVisibleCells().map((cell) => (
                                    <TableCell className="py-3" key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}