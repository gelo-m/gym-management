import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "@/services/authService";

const AuthContext = createContext({
    user: null,
    token: null,
    isAuthenticated: false,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [notification, _setNotification] = useState("");
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const isAuthenticated = !!token;

    const setNotification = (message) => {
        _setNotification(message);

        setTimeout(() => {
            _setNotification("");
        }, 5000);
    };

    const setToken = (token) => {
        _setToken(token);

        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    useEffect(() => {
        if (! token) return;
    
        getCurrentUser()
            .then(({ data }) => {
                setUser(data);
            })
            .catch(() => {
                setUser(null);
                setToken(null);
            });
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                notification,
                setUser,
                setToken,
                setNotification,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);