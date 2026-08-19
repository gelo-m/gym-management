import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { gender } from "./Components/MemberData";

export default function MemberForm({formData, handleFormData}) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label>First Name </Label>
                    <Input
                        className="h-11"
                        name="first_name"
                        value={formData.first_name ?? ""}
                        onChange={handleFormData}
                        placeholder="Enter last name"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Middle Name</Label>
                    <Input
                        className="h-11"
                        name="middle_name"
                        value={formData.middle_name ?? ""}
                        onChange={handleFormData}
                        placeholder="Enter middle name"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input
                        className="h-11"
                        name="last_name"
                        value={formData.last_name ?? ""}
                        onChange={handleFormData}
                        placeholder="Enter last name"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Mobile Number</Label>
                    <Input
                        className="h-11"
                        name="mobile_number"
                        value={formData.mobile_number ?? ""}
                        onChange={handleFormData}
                        placeholder="09xxxxxxxxx"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                        className="h-11"
                        name="email"
                        type="email"
                        value={formData.email ?? ""}
                        placeholder="Enter email"
                        onChange={handleFormData}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Birthday</Label>
                    <Input
                        className="h-11"
                        name="birth_date"
                        type="date"
                        value={formData.birth_date ?? ""}
                        onChange={handleFormData}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Gender</Label>
                    <select
                        name="gender"
                        value={formData.gender ?? ""}
                        onChange={handleFormData}
                        className="w-full h-11 border rounded-md px-3"
                    >
                        {gender.map((item) => (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
  
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-3">
                <div className="space-y-2">
                    <Label>Address</Label>
                    <Textarea
                        className="resize-none"
                        name="address"
                        value={formData.address ?? ""}
                        onChange={handleFormData}
                        rows="1"
                        placeholder="Enter complete address"
                    />
                </div>         
            </div>
        </>
    );
}