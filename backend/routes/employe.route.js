const express = require("express");
const router = express.Router();
const {
  getAllEmploye,
  createAnEmploye,
  getAnEmployee,
  editAnEmploye,
  deleteAnEmploye,
} = require("../controllers/employe.controller");

// Define routes
router.get("/", getAllEmploye);

router.post("/create-employee", createAnEmploye); // Ensure endpoint name matches
router.get("/employee/:id" , getAnEmployee);
router.put("/edit-employee/:id", editAnEmploye);
router.delete("/delete-employee/:id", deleteAnEmploye);

module.exports = router;
