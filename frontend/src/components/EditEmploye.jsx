import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; 
import "../public/EditEmploye.css"; 

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    designation: "",
    gender: "",
    course: "",
    imgupload: "", 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageName, setImageName] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/employee/employee/${id}`);
        setEmployee(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, [id]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

 
  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files[0]) {
      setEmployee({ ...employee, imgupload: files[0] });
      setImageName(files[0].name); 
    }
  };


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
    return null; 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }

    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("mobilenumber", employee.mobilenumber);
    formData.append("designation", employee.designation);
    formData.append("gender", employee.gender);
    formData.append("course", employee.course);
    if (employee.imgupload) {
      formData.append("imgupload", employee.imgupload); 
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/employee/edit-employee/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success("Employee data updated successfully!");
      setError(null);
      navigate("/employee-list");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Error updating employee data";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Edit Employee</h2>
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
            type="text"
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
            <option value="">Select Gender</option>
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
          <label htmlFor="imgupload">Image</label>
          <input
            type="file"
            name="imgupload"
            id="imgupload"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
          />
          {imageName && <p>Selected Image: {imageName}</p>} 
        </div>

        <button type="submit" className="btn">Update Employee</button>
      </form>
      <ToastContainer stacked />
    </div>
  );
};

export default EditEmployee;
