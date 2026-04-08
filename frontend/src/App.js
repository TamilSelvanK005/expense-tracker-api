import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { BudgetProvider } from "./context/BudgetContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function AppContent() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            {isLoggedIn && <Navbar />}
            <AppRoutes />
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <BudgetProvider>
                <BrowserRouter>
                    <AppContent />
                </BrowserRouter>
            </BudgetProvider>
        </AuthProvider>
    );
}
 export default App;