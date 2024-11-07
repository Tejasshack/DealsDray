require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");

// const User = require('./models/Admin')
// const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ROUTES
const employeRoutes = require("./routes/employe.route");
const authRoutes = require("./routes/auth");
app.use("/api/employee", employeRoutes);
app.use("/api/auth", authRoutes);

// DATABASE CONNECTION
// console.log(process.env.MONGOURL);
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// // Insert dummy user data
// const insertDummyUser = async () => {
//   try {
//     // Create a hashed password
//     const hashedPassword = await bcrypt.hash("password123", 10);

//     // Insert the user data
//     const newUser = new User({
//       name: "adminUser",
//       password: hashedPassword,
//     });

//     await newUser.save();
//     console.log("Dummy user data inserted!");
//   } catch (error) {
//     console.error("Error inserting dummy data:", error);
//   }
// };

// // Insert dummy data after the server starts
// insertDummyUser();

app.listen(port, () => {
  console.log("Server Running at port", port);
});
