import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddExpensePage from "../pages/AddExpensePage";
import Reports from "../pages/Reports";
import BudgetPage from "../pages/BudgetPage";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected */}
            <Route path="/" element={
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            } />

            <Route path="/add" element={
                <ProtectedRoute>
                    <AddExpensePage />
                </ProtectedRoute>
            } />

            <Route path="/reports" element={
                <ProtectedRoute>
                    <Reports />
                </ProtectedRoute>
            } />

            <Route path="/budget" element={
                <ProtectedRoute>
                    <BudgetPage />
                </ProtectedRoute>
            } />

            {/* Default */}
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
    );
}

export default AppRoutes;