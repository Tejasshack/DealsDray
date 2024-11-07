import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirect
import "../public/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log(username, password);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      // Save the token and redirect to the dashboard
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect using useNavigate
    } catch (error) {
      console.error(error);
      // You can also display an error message to the user if login fails
    }
  };

  // Theme configurations
  const themes = [
    {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460",
    },
    {
      background: "#461220",
      color: "#FFFFFF",
      primaryColor: "#E94560",
    },
    {
      background: "#192A51",
      color: "#FFFFFF",
      primaryColor: "#967AA1",
    },
    {
      background: "#F7B267",
      color: "#000000",
      primaryColor: "#F4845F",
    },
    {
      background: "#F25F5C",
      color: "#000000",
      primaryColor: "#642B36",
    },
    {
      background: "#231F20",
      color: "#FFF",
      primaryColor: "#BB4430",
    },
  ];

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  // Set theme dynamically based on the selected theme
  const setTheme = (index) => {
    setThemeIndex(index);
    const theme = themes[index];
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="form-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={userNameHandler}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={passwordHandler}
            />
            <button type="submit">Login</button>
          </form>
          <div className="register-forget">
            <span>Forgot Password?</span>
            <span>Register</span>
          </div>
        </div>
        <div className="theme-btn-container">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="theme-btn"
              style={{ background: theme.background }}
              onClick={() => setTheme(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
