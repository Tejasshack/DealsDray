import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout, onSearch }) => {
  const location = useLocation();
  const isEmployeeListPage = location.pathname === "/employee-list";

  const handleLogout = () => {
    onLogout();  
    localStorage.removeItem("token"); 
    window.location.href = "/login"; 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/employee-list" className="navbar-link">
              Employee List
            </Link>
            <Link to="/create-employee" className="navbar-link">
              Create Employee
            </Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        {isEmployeeListPage && (
          <input
            type="text"
            placeholder="Search Employee"
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
        )}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="navbar-button">
            Logout
          </button>
        ) : (
          <Link to="/login" className="navbar-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
