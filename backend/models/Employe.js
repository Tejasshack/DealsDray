const mongoose = require("mongoose");

const employeeCreateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobilenumber: {
      type: Number,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    imgupload: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeCreation = mongoose.model(
  "EmployeeCreation",
  employeeCreateSchema
);

module.exports = EmployeeCreation;
