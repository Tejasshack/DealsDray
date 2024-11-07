import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../public/EmployeList.css"; // You can create this file for custom styling

const EmployeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employee/");
        setEmployees(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching employees");
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

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/employee/delete-employee/${id}`
      );
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      setError("Error deleting employee");
    }
  };

  return (
    <div>
      <h1 style={{color: "black"}}>Employee List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {employees.length > 0 ? (
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
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  <img
                    src={employee.imgupload}
                    alt={`${employee.name}'s profile`}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobilenumber}</td>
                <td>{employee.designation}</td>
                <td>{employee.gender}</td>
                <td>{employee.course}</td>

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
    </div>
  );
};

export default EmployeList;
