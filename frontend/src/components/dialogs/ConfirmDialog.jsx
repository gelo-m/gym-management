import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ConfirmDialog({
    open,
    onOpenChange,
    title = "Confirmation",
    description = "",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    confirmButtonClass = "",
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="
                sm:max-w-md
                bg-white
                border-0
                shadow-2xl
                rounded-2xl
                p-4
                overflow-hidden
            ">
                <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                </div>

                <DialogHeader>
                    <DialogTitle className="text-center">
                        {title}
                    </DialogTitle>
                </DialogHeader>

                <p className="text-center text-slate-500">
                    {description}
                </p>

                <div className="flex justify-end gap-3 mt-4">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        {cancelText}
                    </Button>

                    <Button
                        className={confirmButtonClass}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}