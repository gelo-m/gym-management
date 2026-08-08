import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MemberForm from "./MemberForm";
export default function MemberDialog({
    open,
    onOpenChange,
}) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent  className="
                sm:max-w-3xl
                bg-white
                border-0
                shadow-2xl
                rounded-2xl
                p-0
                overflow-hidden
            ">

                <div className="bg-blue-600 text-white p-6">
                    <DialogTitle className="text-xl font-semibold">
                        Add New Member
                    </DialogTitle>

                    <DialogDescription className="text-blue-100">
                        Create a new gym member profile.
                    </DialogDescription>
                </div>

                <div className="p-6">
                    <MemberForm />
                </div>

                <div className="bg-slate-50 px-6 py-4 flex justify-end gap-2">
                    <Button
                        className="bg-red-500 text-white !h-12"
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            shadow-md
                            text-white
                            !h-12"
                    >
                        Save Member
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    );
}