// src/context/AuthContext.js

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // 🔥 direct localStorage read (no delay issue)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    const login = (username, password) => {
        if (username === "admin" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};