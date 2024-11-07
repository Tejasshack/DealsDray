import React from "react";
import { Link } from "react-router-dom";
import EmployeList from "../pages/EmployeList";
import "../public/Dashboard.css"; // You can add this file for custom styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/employee-list" className="navbar-link">
            Employee List
          </Link>
          <Link to="/create-employee" className="navbar-link">
            Create Employee
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="navbar-button">
            Login
          </Link>
        </div>
      </nav>
      <div className="dashboard-content">
        <h1 style={{ color: "black" }}>Welcome to the Employee Dashboard</h1>
        <EmployeList />
      </div>
    </div>
  );
};

export default Dashboard;
