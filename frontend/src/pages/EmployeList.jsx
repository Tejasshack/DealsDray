import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employee/");
        setEmployees(response.data); // Assuming the API returns an array of employees
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching employees");
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error if any */}
      {employees.length > 0 ? (
        employees.map((employee) => (
          <div key={employee.serialNumber}>
            {" "}
            {/* Assuming serialNumber is unique */}
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Mobile: {employee.mobilenumber}</p>
            <p>Designation: {employee.designation}</p>
            <p>Gender: {employee.gender}</p>
            <p>Course: {employee.course}</p>
            <img src={employee.imgupload} alt={`${employee.name}'s profile`} />
          </div>
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeList;
