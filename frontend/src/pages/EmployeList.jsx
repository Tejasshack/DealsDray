import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    try {
      await axios.delete(`http://localhost:5000/api/employee/${id}`);
      setEmployees(
        employees.filter((employee) => employee.serialNumber !== id)
      );
    } catch (err) {
      setError("Error deleting employee");
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {employees.length > 0 ? (
        employees.map((employee) => (
          <div key={employee.serialNumber}>
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Mobile: {employee.mobilenumber}</p>
            <p>Designation: {employee.designation}</p>
            <p>Gender: {employee.gender}</p>
            <p>Course: {employee.course}</p>
            <img src={employee.imgupload} alt={`${employee.name}'s profile`} />
            <button onClick={() => handleEdit(employee.serialNumber)}>
              Edit
            </button>
            <button onClick={() => handleDelete(employee.serialNumber)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeList;
