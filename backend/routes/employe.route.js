const express = require("express");
const router = express.Router();
const {
  getAllEmploye,
  createAnEmploye,
  getAnEmployee,
  editAnEmploye,
  deleteAnEmploye,
} = require("../controllers/employe.controller");
const multer = require("multer");
const path = require("path");


// Setup storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // The directory where the file will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set a unique file name
  },
});

const upload = multer({ storage });

// Route to create an employee with an image upload

// Define routes
router.get("/", getAllEmploye);

router.post("/create-employee", upload.single("imgupload"), createAnEmploye); // Ensure endpoint name matches
router.get("/employee/:id" , getAnEmployee);
router.put('/edit-employee/:id', upload.single('imgupload'), editAnEmploye);
router.delete("/delete-employee/:id", deleteAnEmploye);

module.exports = router;
