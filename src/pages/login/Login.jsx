import React, { useState, useContext } from "react";
import "./login.css";
import { login } from "../../context/authContext/apiCalls";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div>
      <Navbar />
      <h1 className="title">Login Netflix-clone Admin</h1>
      <div className="login">
        <form className="loginForm">
          <input
            type="text"
            placeholder="email"
            className="loginInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="password"
            placeholder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
