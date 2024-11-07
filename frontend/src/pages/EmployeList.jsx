import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar"; 
import "../public/EmployeList.css"; 

const EmployeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employee/");
        setEmployees(response.data);
        setFilteredEmployees(response.data); // Initial filtering
        toast.success("Employee Data Fetched Successfully!");
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching employees");
        toast.error("Failed to Fetch Employee Data.");
      }
    };

    fetchEmployees();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) return;
    try {
      await axios.delete(
        `http://localhost:5000/api/employee/delete-employee/${id}`
      );
      setEmployees(employees.filter((employee) => employee._id !== id));
      toast.success("Employee deleted successfully!");
    } catch (err) {
      setError("Error deleting employee");
      toast.error("Failed to delete employee.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    toast.success("Logged out successfully!");
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <h1 style={{ color: "white" }}>Employee List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredEmployees.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  {employee.imgupload ? (
                    <img
                      src={employee.imgupload}
                      alt={`${employee.name || "No Name"}'s profile`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <span>No Image</span> 
                  )}
                </td>
                <td>{employee.name || "No Name"}</td>
                <td>{employee.email || "No Email"}</td>
                <td>{employee.mobilenumber || "No Mobile"}</td>
                <td>{employee.designation || "No Designation"}</td>
                <td>{employee.gender || "No Gender"}</td>
                <td>{employee.course || "No Course"}</td>
                <td>
                  <button onClick={() => handleEdit(employee._id)}>Edit</button>
                  <button onClick={() => handleDelete(employee._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
      <ToastContainer stacked />
    </div>
  );
};

export default EmployeList;
