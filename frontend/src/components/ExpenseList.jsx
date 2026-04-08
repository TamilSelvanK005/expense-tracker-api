import React, { useState } from "react";

function ExpenseList({ expenses, onDelete, onUpdate, loading }) {
  // which index currently editing (null = no edit)
  const [editIndex, setEditIndex] = useState(null);

  // store edited data temporarily
  const [editData, setEditData] = useState({});

  // track which item is deleting
  const [deleting, setDeleting] = useState(null);

  // track update loading state
  const [updating, setUpdating] = useState(false);

  // 👉 User clicks "Update"
  const startEdit = (index, expense) => {
    setEditIndex(index);      // set editing row index
    setEditData(expense);     // copy that expense data
  };

  // 👉 When user types in input
  const handleChange = (e) => {
    setEditData({
      ...editData,                 // keep old values
      [e.target.name]: e.target.value // update changed field
    });
  };

  // 👉 Save edited expense
  const saveEdit = async () => {
    setUpdating(true); // start loading

    try {
      await onUpdate(editIndex, {
        ...editData,                         // copy data
        amount: parseFloat(editData.amount)  // string → number
      });

      setEditIndex(null); // close edit mode
    } finally {
      setUpdating(false); // stop loading
    }
  };

  // 👉 Delete expense
  const handleDelete = async (title) => {
    setDeleting(title); // mark deleting item

    try {
      await onDelete(title); // call parent delete
    } finally {
      setDeleting(null); // reset after delete
    }
  };

  // 👉 Loading state
  if (loading) {
    return <div className="expense-list"><h3>Loading expenses...</h3></div>;
  }

  return (
    <div className="expense-list">
      <h3>EXPENSES LIST</h3>

      {/* 👉 If no data */}
      {expenses.length === 0 ? (
        <p>No expenses yet. Add one to get started!</p>
      ) : (

        // 👉 Loop each expense
        expenses.map((e, i) => (
          <div key={i} className="expense-item">

            {/* 👉 Check if this row is in edit mode */}
            {editIndex === i ? (
              <div className="edit-row">

                {/* Title input */}
                <input
                  name="title"
                  value={editData.title}
                  onChange={handleChange}
                  disabled={updating} // disable while saving
                />

                {/* Amount input */}
                <input
                  name="amount"
                  type="number"
                  value={editData.amount}
                  onChange={handleChange}
                  disabled={updating}
                />

                {/* Category input */}
                <input
                  name="category"
                  value={editData.category}
                  onChange={handleChange}
                  disabled={updating}
                />

                {/* Save button */}
                <button onClick={saveEdit} disabled={updating}>
                  {updating ? "Saving..." : "Save"}
                </button>

              </div>
            ) : (
              <>
                {/* 👉 Normal display */}
                <div className="expense-text">
                  {e.title} - ₹{e.amount} ({e.category})
                </div>

                <div className="actions">

                  {/* Update button */}
                  <button
                    onClick={() => startEdit(i, e)}
                    className="edit-btn"
                    disabled={deleting !== null} // disable during delete
                  >
                    Update
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(e.title)}
                    className="delete-btn"
                    disabled={deleting !== null}
                  >
                    {deleting === e.title ? "Deleting..." : "Delete"}
                  </button>

                </div>
              </>
            )}

          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;