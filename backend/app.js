const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ROUTES
const employeRoutes = require("./routes/employe.route");
app.use("/api/employee", employeRoutes);


// DATABASE CONNECTION
const MONGOURL =
  "mongodb+srv://tejaswi:PaxIn1e1FNahdWt7@cluster0.yzlld.mongodb.net/dealsDray?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log("Server Running at port", port);
});
