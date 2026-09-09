import api from "@/services/api";

export const createMember = async (payload) => {
    return await api.post("/members", payload);
}

export const getMembers = async (page = 1, filters) => {
    return await api.get("/members", {
        params: {
            page,
            filters
        },
    });
}

export const updateMember = async (id, payload) => {
    console.log(payload);
    return await api.put(`/members/${id}`, payload);
}

export const deleteMember = async (id) => {
    return await api.delete(`/members/${id}`);
}