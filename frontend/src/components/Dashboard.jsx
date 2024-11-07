
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../public/Dashboard.css";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="dashboard-container">
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onSearch={setSearchTerm}
      />
      <div className="dashboard-content">
        <h1 style={{ color: "black" }}>Welcome to the Employee Dashboard</h1>
        
        {isLoggedIn && showEmployeeList && (
          <EmployeList searchTerm={searchTerm} />
        )}
      </div>
    </div>
  );
};
// 
export default Dashboard;
