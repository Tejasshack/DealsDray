import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../public/EditEmploye.css";

const EditEmploye = () => {
  const { id } = useParams(); // Get the employee ID from URL params
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    designation: "",
    gender: "",
    course: "",
    imgupload: "",
  });
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Error state

  // Fetch employee data when the component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/employee/employee/${id}`
        );
        setEmployee(data); // Pre-fill form with employee data
        setLoading(false); // Stop loading
      } catch (err) {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, [id]); // Re-run if ID changes (when navigating from list)

  // Handle input change to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle form submission to update employee data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/employee/edit-employee/${id}`,
        employee
      ); // Update employee by ID
      console.log(response.data);
      const confirmUpdate = window.confirm("Employee Data Has Been Updated");
      if (!confirmUpdate) {
        return;
      }

      // Redirect to the employee list or another page after successful update
    } catch (error) {
      setError("Error updating employee data");
    }
  };

  // Show loading text or error message if necessary
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={employee.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={employee.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="mobilenumber">Mobile Number</label>
        <input
          type="tel"
          name="mobilenumber"
          id="mobilenumber"
          value={employee.mobilenumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          name="designation"
          id="designation"
          value={employee.designation}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={employee.gender}
          onChange={handleInputChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          id="course"
          value={employee.course}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="imgupload">Image URL</label>
        <input
          type="text"
          name="imgupload"
          id="imgupload"
          value={employee.imgupload}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmploye;
