import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        category: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null);
    };
//validation1
    const submit = async () => {
        if (!form.title || !form.amount || !form.category) {
            setError("Fill all fields");
            return;
        }
//validation2
        if (isNaN(form.amount) || parseFloat(form.amount) <= 0) {
            setError("Amount must be a valid positive number");
            return;
        }

        setLoading(true);
        try {
            await onAdd({
                ...form,
                amount: parseFloat(form.amount)
            });
            setForm({ title: "", amount: "", category: "" });
            setError(null);
        } catch (err) {
            setError("Failed to add expense. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-form">
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

            <div>
                <input
                    name="title"
                    placeholder="Enter Title"
                    value={form.title}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div>
                <input
                    name="amount"
                    type="number"
                    placeholder="Enter Amount"
                    value={form.amount}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div>
                <input
                    name="category"
                    placeholder="Food / Travel"
                    value={form.category}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <button onClick={submit} disabled={loading}>
                {loading ? "Adding..." : "Add Expense"}
            </button>

        </div>
    );
}

export default ExpenseForm;
