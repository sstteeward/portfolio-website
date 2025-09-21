import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "stewardhumiwat@gmail.com" && password === "sstteward") {
      onLogin(); 
      navigate("/home");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    
   <div className={styles.loginContainer}>

  <form className={styles.loginForm} onSubmit={handleSubmit}>
    <div className={styles.logoWrapper}>
    <img src="sstteward.png" alt="Logo" className={styles.logo} />
  </div>
   <h3>Portfolio</h3>
    <h2 className={styles.title}>Login</h2>

    <label>Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button type="submit" className={styles.loginButton}>Login</button>
  </form>
</div>

  );
};
