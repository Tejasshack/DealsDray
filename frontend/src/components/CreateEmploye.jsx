import React, { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {
  // State to hold form data
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    designation: "",
    gender: "",
    course: "",
    imgupload: "",
    serialNumber: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee/create-employee", // Ensure the endpoint is correct
        employee
      );
      setSuccess("Employee created successfully!");
      setError(null);
      // Optionally reset the form
      setEmployee({
        name: "",
        email: "",
        mobilenumber: "",
        designation: "",
        gender: "",
        course: "",
        imgupload: "",
        serialNumber: "", // Reset serial number
      });
    } catch (err) {
      console.error(err); // Log full error for debugging
      setError(err.response?.data?.message || "Error creating employee");
      setSuccess(null);
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={employee.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={employee.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="mobilenumber">Mobile Number</label>
          <input
            type="tel"
            name="mobilenumber"
            id="mobilenumber"
            value={employee.mobilenumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={employee.designation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={employee.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            id="course"
            value={employee.course}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="imgupload">Image URL</label>
          <input
            type="text"
            name="imgupload"
            id="imgupload"
            value={employee.imgupload}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="serialNumber">Serial Number</label>
          <input
            type="text"
            name="serialNumber"
            id="serialNumber"
            value={employee.serialNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
