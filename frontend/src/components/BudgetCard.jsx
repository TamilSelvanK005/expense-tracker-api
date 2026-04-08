import React from "react";

function BudgetCard({ budget, setBudget, total }) {
  const remaining = budget - total;

  return (
    <>
      {/* Budget Input */}
      <div className="input-box">
      <div style={{ marginBottom: "15px", width: "80%"  }}>
        <h3>Set Budget</h3>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value) || 0)}
        />
      </div>
      </div>

      {/* Cards */}
      <div className="cards">
        <div className="card green">
          <h3>Total Budget</h3>
          <p>₹{budget}</p>
        </div>

        <div className="card red">
          <h3>Total Expenses</h3>
          <p>₹{total}</p>
        </div>

        <div className="card blue">
          <h3>Remaining</h3>
          <p>₹{remaining}</p>
        </div>
      </div>
    </>
  );
}

export default BudgetCard;