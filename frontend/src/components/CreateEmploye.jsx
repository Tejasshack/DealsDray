import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing styles for the toast
import "../public/CreateEmployee.css";

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
  });

  const [error, setError] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    if (employee.name.length < 3) {
      return "Name should be at least 3 characters long.";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(employee.email)) {
      return "Please enter a valid email address.";
    }
    if (!/^\d{10}$/.test(employee.mobilenumber)) {
      return "Please enter a valid 10-digit mobile number.";
    }
    if (!employee.course) {
      return "Course cannot be empty.";
    }
    if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(employee.imgupload)) {
      return "Please enter a valid image URL.";
    }
    return null; // No error
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);  // Show error toast
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee/create-employee", // Ensure the endpoint is correct
        employee
      );
      toast.success("Employee created successfully!");  // Show success toast
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
      });
    } catch (err) {
      console.error(err); // Log full error for debugging
      const errorMessage = err.response?.data?.message || "Error creating employee";
      setError(errorMessage);
      toast.error(errorMessage);  // Show error toast
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
            placeholder="YourName"
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
            placeholder="name12@gmail.com"
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
            pattern="^\d{10}$"
            placeholder="1234567890"
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
            placeholder="Image URL"
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
