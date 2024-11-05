const express = require("express");
const router = express.Router();
const {
  getAllEmploye,
  createAnEmploye,
  editAnEmploye,
  deleteAnEmploye,
} = require("../controllers/employe.controller");

// Define routes
router.get("/", getAllEmploye);
router.post("/create-employee", createAnEmploye); // Ensure endpoint name matches
router.put("/edit-employee/:id", editAnEmploye);
router.delete("/delete-employee/:id", deleteAnEmploye);

module.exports = router;
