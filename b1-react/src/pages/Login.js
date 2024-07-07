import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await login({ username, password });
      if (response.success) {
        navigate("/home");
      } else {
        setErrorMessage("Login not successful!");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User name:</label>
          <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
