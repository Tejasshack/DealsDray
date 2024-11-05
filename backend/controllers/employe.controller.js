const Employe = require("../models/Employe");

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

const editAnEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmploye = await Employe.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEmploye) {
      return res.status(404).send({ message: "Employe not found!" });
    }
    res.status(200).send({
      message: "Employe updated successfully",
      employe: updatedEmploye,
    });
  } catch (error) {
    console.error("Error updating Employe data", error);
    res.status(500).send({ message: "Failed to update Employe data" });
  }
};

const deleteAnEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmploye = await Employe.findByIdAndDelete(id);
    if (!deletedEmploye) {
      return res.status(404).send({ message: "Employe not found!" });
    }
    res.status(200).send({
      message: "Employe deleted successfully",
      employe: deletedEmploye,
    });
  } catch (error) {
    console.error("Error deleting Employe", error);
    res.status(500).send({ message: "Failed to delete Employe" });
  }
};

module.exports = {
  getAllEmploye,
  createAnEmploye,
  editAnEmploye,
  deleteAnEmploye,
};
