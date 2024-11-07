const Employe = require("../models/Employe");
const mongoose = require("mongoose");
const getAllEmploye = async (req, res) => {
  try {
    const employe = await Employe.find().sort({ createdAt: -1 });
    res.status(200).send(employe);
  } catch (error) {
    console.error("Error fetching Employe Data", error);
    res.status(500).send({ message: "Failed to fetch Employe Data" });
  }
};

const createAnEmploye = async (req, res) => {
  try {
    // Create a new employee using the data from the request body
    const newEmployee = new Employe({
      name: req.body.name,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      designation: req.body.designation,
      gender: req.body.gender,
      course: req.body.course,
      imgupload: req.body.imgupload,
    });

    // Save the new employee to the database
    await newEmployee.save();

    // Send a successful response
    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    console.error("Error creating employee", error);
    res.status(500).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

const getAnEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id; // Get the employee ID from the URL parameter

    // Attempt to find the employee by ID
    const employee = await Employe.findById(employeeId);
    // If no employee is found, return a 404 error
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    // If the employee is found, send the employee data in the response
    res.status(200).json(employee);
  } catch (error) {
    // Handle any errors (like invalid ID format, DB issues, etc.)
    console.error(error);
    res.status(500).json({ message: "Error retrieving employee data" });
  }
};

const editAnEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ObjectId" });
    }
    const updatedEmployee = await Employe.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEmployee) {
      return res.status(404).send({ message: "Employee not found!" });
    }
    res.status(200).send({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error("Error updating Employee data", error);
    res.status(500).send({ message: "Failed to update Employee data" });
  }
};

const deleteAnEmploye =
  ("/employee/:id",
  async (req, res) => {
    try {
      const employeeId = req.params.id;

      // Validate the ObjectId
      if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(400).json({ message: "Invalid ObjectId" });
      }

      // Find and delete the employee
      const employee = await Employe.findByIdAndDelete(employeeId);

      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting employee", error: err });
    }
  });

module.exports = {
  getAllEmploye,
  createAnEmploye,
  getAnEmployee,
  editAnEmploye,
  deleteAnEmploye,
};
