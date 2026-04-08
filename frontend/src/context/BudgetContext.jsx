import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [budget, setBudget] = useState(5000);

    return (
        <BudgetContext.Provider value={{ budget, setBudget }}>
            {children}
        </BudgetContext.Provider>
    );
};