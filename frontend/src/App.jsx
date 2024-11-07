import React from "react";
import { Outlet } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
