import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import CreateEmploye from "./components/CreateEmploye.jsx";
import Dashboard from "./components/Dashboard.jsx";
import EditEmploye from "./pages/EditEmploye.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "create-employee", element: <CreateEmploye /> },
      { path: "edit-employee/:id", element: <EditEmploye /> },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
