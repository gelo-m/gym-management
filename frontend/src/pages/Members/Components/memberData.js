import { Gender } from "../../../constants/gender";
import { MemberStatus } from "../../../constants/memberStatus";
import { MemberAction } from "../../../constants/memberAction";

export const members = [
    {
        member_id: "MBR0001",
        name: "John Doe",
        contact: "09171234567",
        plan: "Monthly",
        start_date: "2026-07-01",
        expiry_date: "2026-08-01",
        status: "Active",
    },
    {
        member_id: "MBR0002",
        name: "Jane Smith",
        contact: "09181234567",
        plan: "Annual",
        start_date: "2026-01-01",
        expiry_date: "2027-01-01",
        status: "Active",
    },
    {
        member_id: "MBR0003",
        name: "Michael Santos",
        contact: "09191234567",
        plan: "Monthly",
        start_date: "2026-05-01",
        expiry_date: "2026-06-01",
        status: "Expired",
    },
];

export const status = [
    { value: "", label: "All"},
    { value: MemberStatus.ACTIVE, label: "Active"},
    { value: MemberStatus.INACTIVE, label: "Inactive"},
    { value: MemberStatus.FROZEN, label: "Frozen"},
    { value: MemberStatus.EXPIRED, label: "Expired"},
];

export const actions = [
    { value: MemberAction.VIEW, action: "View", label: "View", className: "" },
    { value: MemberAction.EDIT, action: "Edit", label: "Edit", className: "" },
    { value: MemberAction.RENEW, action: "Renew", label: "Renew Membership", className: "" },
    { value: MemberAction.DELETE, action: "Delete", label: "Delete", className: "text-red-600" },
];

export const gender = [
    {value: Gender.MALE, label: "Male"},
    {value: Gender.FEMALE, label: "Female"},
]