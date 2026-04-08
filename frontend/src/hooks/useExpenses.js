import { useState, useEffect } from "react";
import API from "../services/api";

function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //FETCH ALL EXPENSES FROM BACKEND
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await API.get("/expenses");
      setExpenses(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching expenses:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //ADD EXPENSE
  const addExpense = async (data) => {
    try {
      const response = await API.post("/expenses", data);
      // Refresh expenses list after adding
      await fetchExpenses();
      return response.data;
    } catch (err) {
      console.error("Error adding expense:", err);
      setError(err.message);
    }
  };

  //DELETE EXPENSE
  const deleteExpense = async (title) => {
    try {
      await API.delete(`/expenses/${title}`);
      // Refresh expenses list after deleting
      await fetchExpenses();
    } catch (err) {
      console.error("Error deleting expense:", err);
      setError(err.message);
    }
  };

  //UPDATE EXPENSE
  const updateExpense = async (index, data) => {
    try {
      // Delete old and add new (MongoDB update)
      const oldTitle = expenses[index].title;
      await API.delete(`/expenses/${oldTitle}`);
      await API.post("/expenses", data);
      // Refresh expenses list after updating
      await fetchExpenses();
    } catch (err) {
      console.error("Error updating expense:", err);
      setError(err.message);
    }
  };

  return { expenses, addExpense, deleteExpense, updateExpense, loading, error };
}

export default useExpenses;