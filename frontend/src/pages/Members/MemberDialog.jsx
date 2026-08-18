import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MemberForm from "./MemberForm";

const emptyForm = {
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    mobile_number: "",
    email: "",
    address: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
    joined_at: "",
    status: "",
}

export default function MemberDialog({
    mode,
    member,
    open,
    onOpenChange,
}) {
    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        if (mode === "edit" && member) {
            setFormData(member);
        }
    
        if (mode === "create") {
            setFormData(formData);
        }
    
    }, [mode, member]);

    const handleFormData = (e) => {
        setFormData({
            ... formData,
            [e.target.name]: e.target.value
        })
    }

    const handleDialogClose = (isOpen) => {
        if (isOpen) return;
        onOpenChange(isOpen);
        setFormData(emptyForm);
        // setSelectedMember(null);
    }

    return (
        <Dialog
            mode={mode}
            member={member}
            open={open}
            onOpenChange={(isOpen) => {
                handleDialogClose(isOpen);
            }}
        >
            <DialogContent className="
                sm:max-w-3xl
                bg-white
                border-0
                shadow-2xl
                rounded-2xl
                p-0
                overflow-hidden
            ">

                <div className="bg-blue-600 text-white p-6">
                    <DialogTitle>
                        {mode === "create"
                            ? "Add Member"
                            : "Edit Member"}
                    </DialogTitle>

                    <DialogDescription className="text-blue-100">
                        Create a new gym member profile.
                    </DialogDescription>
                </div>

                <div className="p-6">
                    <MemberForm formData={formData} handleFormData={handleFormData} />
                </div>

                <div className="bg-slate-50 px-6 py-4 flex justify-end gap-2">
                    <Button
                        className="bg-red-500 text-white !h-12"
                        variant="outline"
                        onClick={() => handleDialogClose(false)}
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