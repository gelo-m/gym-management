import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { gender } from "./Components/MemberData";

export default function MemberForm() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label>First Name</Label>
                <Input className="h-11" />
            </div>
            <div className="space-y-2">
                <Label>Last Name</Label>
                <Input className="h-11" />
            </div>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input className="h-11" />
            </div>
            <div className="space-y-2">
                <Label>Contact Number</Label>
                <Input placeholder="09xxxxxxxxx" className="h-11" />
            </div>

            <div className="space-y-2">
                <Label>Gender</Label>
                <select className="w-full h-11 rounded-md border border-slate-200 px-3">
                    {
                        gender.map((item) => (<option value={item.value}>{item.label}</option>))
                    }
                </select>
            </div>

            <div className="space-y-2">
                <Label>Birth Date</Label>
                <Input type="date" className="h-11" />
            </div>

            <div className="md:col-span-2 space-y-2">
                <Label>Address</Label>
                <Textarea
                    placeholder="Enter complete address"
                    className="min-h-24 resize-none"
                />
            </div>
        </div>
    );
}