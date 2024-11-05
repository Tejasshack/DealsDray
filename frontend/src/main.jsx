import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM
import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import CreateEmployee from "./components/CreateEmploye.jsx";
import Dashboard from "./components/Dashboard.jsx";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-employe",
    element: <CreateEmployee />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
