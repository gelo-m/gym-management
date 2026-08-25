import api from "@/services/api";

export const createMember = async (payload) => {
    return await api.post("/members", payload);
};

export const getMembers = async (params = {}) => {
    return await api.get("/members", {
        params,
    });
};