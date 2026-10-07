import { Gender } from "../../../constants/gender";
import { MemberStatus } from "../../../constants/memberStatus";
import { MemberAction } from "../../../constants/memberAction";

export const status = [
    { value: "", label: "All"},
    { value: MemberStatus.ACTIVE, label: "Active"},
    { value: MemberStatus.INACTIVE, label: "Inactive"},
    { value: MemberStatus.FROZEN, label: "Frozen"},
    { value: MemberStatus.SUSPENDED, label: "Suspended"},
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