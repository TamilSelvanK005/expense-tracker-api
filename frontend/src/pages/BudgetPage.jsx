import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import useExpenses from "../hooks/useExpenses";
import { calculateTotal } from "../utils/calculateTotal";
import BudgetCard from "../components/BudgetCard";

function BudgetPage() {
    const { budget, setBudget } = useContext(BudgetContext);
    const { expenses } = useExpenses();

    const total = calculateTotal(expenses);

    return (
        <div style={{ marginTop: "60px", padding: "20px" }}>
            <h2>BUDGET PAGE</h2>

            <BudgetCard
                budget={budget}
                setBudget={setBudget}
                total={total}
            />
        </div>
    );
}

export default BudgetPage;