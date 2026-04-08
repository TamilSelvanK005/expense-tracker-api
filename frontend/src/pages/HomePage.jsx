import React, { useContext } from "react";
import ExpenseList from "../components/ExpenseList";
import useExpenses from "../hooks/useExpenses";
import { BudgetContext } from "../context/BudgetContext";
import { calculateTotal } from "../utils/calculateTotal";
import Navbar from "../components/Navbar";
import BudgetCard from "../components/BudgetCard";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function HomePage() {
    const { expenses, deleteExpense, updateExpense, loading, error } = useExpenses();
    const { budget, setBudget } = useContext(BudgetContext);

    const total = calculateTotal(expenses);

    //Category Data
    const categoryData = {};
    expenses.forEach((e) => {
        categoryData[e.category] =
            (categoryData[e.category] || 0) + e.amount;
    });

    //Chart Data (UPDATED)
    const chartData = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                label: "Expenses",
                data: Object.values(categoryData),

                backgroundColor: [
                    "#3498db", // blue
                    "#e74c3c", // red
                    "#2ecc71", // green
                    "#f1c40f", // yellow
                    "#9b59b6", // purple
                    "#1abc9c", // teal
                ],

                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    //Chart Options
    const options = {
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <div>

            {/* NAVBAR */}
            <Navbar />

            {/* CONTENT */}
            <div style={{ marginTop: "70px", display: "flex", justifyContent: "center" }}>

                <div style={{ width: "85%", padding: "20px" }}>

                    <h2>Expense Dashboard</h2>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <h3 style={{ color: "red" }}>Error: {error}</h3>
                    )}

                    {/*Budget Card */}
                    <BudgetCard
                        budget={budget}
                        setBudget={setBudget}
                        total={total}
                    />

                    {/* ALERT */}
                    {total > budget && (
                        <h3 className="alert">Budget Exceeded!</h3>
                    )}

                    {/* MAIN SECTION */}
                    <div className="main">

                        {/* LEFT */}
                        <div className="left">
                            <ExpenseList
                                expenses={expenses}
                                onDelete={deleteExpense}
                                onUpdate={updateExpense}
                                loading={loading}
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="right">
                            <h3>Category Wise</h3>

                            <Doughnut
                                data={chartData}
                                options={options}
                                style={{ maxWidth: "80%", maxHeight: "80%" }}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;