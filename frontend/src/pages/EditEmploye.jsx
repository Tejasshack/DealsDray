import React, { useState, useEffect } from "react";
import axios from "axios";

const EditEmploye = ({match}) => {
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

 
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const { data } = await axios.get(`/api/employee/${match.params.id}`); // Make API call to get the employee by ID
        setEmployee(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, [match.params.id]);

  
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
      const response = await axios.put(`/api/employee/edit-employee/${match.params.id}`, employee); // API request to update employee
      console.log(response.data);
      // Optionally redirect after successful update, or show a success message
    } catch (error) {
      setError("Error updating employee data");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            id="name"
            value={employe.name}
            onChange={handleInputChange}
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
          />
        </div>

        <div className="form-control">
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

        <div className="form-control">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            id="course"
            value={employee.course}
            onChange={handleInputChange}
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
          />
        </div>

        <button type="submit" className="btn">
          Update Employee
        </button>
      </form>
    </>
  );
};

export default EditEmploye;
