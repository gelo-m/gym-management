import api from "./api";

export const login = (data) => {
    return api.post("/login", data);
};

export const logout = () => {
    return api.post("/logout");
};

export const getCurrentUser = () => {
    return api.get("/me");
};
