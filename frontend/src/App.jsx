import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <div>
      <LoginPage />
      <Outlet />
    </div>
  );
}

export default App;
