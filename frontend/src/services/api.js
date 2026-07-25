import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config; 
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const response = error.response;

        if (response?.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        }

    } catch (error) {
        console.log(error);
    }

    throw error;
    // return Promise.reject(error);
    
})

export default api;