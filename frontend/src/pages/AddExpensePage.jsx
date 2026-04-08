import ExpenseForm from "../components/ExpenseForm"; 
import ExpenseList from "../components/ExpenseList";
import useExpenses from "../hooks/useExpenses";

function AddExpensePage() {

    const {expenses,addExpense, deleteExpense,updateExpense,loading } = useExpenses();

    return (
        <div className="add-container">

            <h2>ADD EXPENSE</h2>

            {/* ADD FORM  */}
            <ExpenseForm onAdd={addExpense} />

            {/* LIST */}
            <div className="left">
                <ExpenseList
                    expenses={expenses}
                    onDelete={deleteExpense}
                    onUpdate={updateExpense}
                    loading={loading}
                />
            </div>

        </div>
    );
}

export default AddExpensePage;