import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="navbar">

      <h2>💰 Expenses Tracker</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Expense</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/reports">Reports</Link>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;