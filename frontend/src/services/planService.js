import api from "@/services/api";

export const createPlan = async (payload) => {
    return await api.post("/plans", payload);
}

export const getPlans = async (page = 1, filters = {}, sortBy, sortDirection) => {
    return await api.get("/plans", {
        params: {
            page,
            filters: {
                ...filters
            },
            sort_by: sortBy,
            sort_direction: sortDirection,
        },
    });
}

export const updatePlan = async (id, payload) => {
    return await api.put(`/plans/${id}`, payload);
}

export const deletePlan = async (id) => {
    return await api.delete(`/plans/${id}`);
}

export const getTotalPlan = async (filters = {}) => {
    return await api.get("/plans/total", {
        params: {
            filters: {
                ...filters
            }
        }
    });
}