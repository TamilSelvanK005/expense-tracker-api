import useExpenses from "../hooks/useExpenses";
import Navbar from "../components/Navbar";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function Reports() {
    const { expenses } = useExpenses();


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

                    {/* MAIN SECTION */}
                    <div className="main">


                        {/* RIGHT */}
                        <div className="right">
                            <h3>Category Wise</h3>
                            <Pie data={chartData} options={options} style={{ maxWidth: "80%", maxHeight: "80%" }} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reports;