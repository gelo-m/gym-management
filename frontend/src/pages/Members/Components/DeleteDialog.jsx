import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function DeleteDialog({
    open,
    onOpenChange,
    member,
    onConfirm,
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">

                <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                        <Trash2 className="h-8 w-8 text-red-600" />
                    </div>
                </div>

                <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                        ⚠ Delete Member

                        This action cannot be undone.
                    </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-slate-500 text-center">
                    Are you sure you want to delete
                    <span className="font-semibold">
                        {" "}
                        {member?.first_name} {member?.last_name}
                    </span>
                    ?
                </p>

                <div className="flex justify-end gap-3 mt-4">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        className="bg-red-600 hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Delete
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    );
}