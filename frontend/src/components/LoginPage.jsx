import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };
  
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    // Add logic for handling form submission, e.g., sending data to the backend
  };

  return (
    <div>
      <form onSubmit={formHandler} method="post">
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
    </div>
  );
};

export default LoginPage;
