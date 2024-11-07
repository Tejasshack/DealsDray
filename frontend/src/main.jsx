import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import CreateEmploye from "./components/CreateEmploye.jsx";
import Dashboard from "./components/Dashboard.jsx";
import EditEmploye from "./components/EditEmploye.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { ToastContainer } from "react-toastify";
import EmployeList from "./pages/EmployeList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/", element: <ToastContainer stacked /> },
      { path: "/employee-list", element: <EmployeList /> },
      { path: "create-employee", element: <CreateEmploye /> },
      { path: "edit-employee/:id", element: <EditEmploye /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
