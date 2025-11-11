import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { API_BASE_URL } from "../configs";

const Login = () => {
  const [formData, setFormData] = useState({
    email_name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_BASE_URL}/core/login/`,
        formData
      );

      const userName = res.data.User;
      alert(`${res.data.message} Welcome, ${userName}.`);

      setFormData({
        email_name: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.data.error) {
        const errorMsg = error.response.data.error;
        alert(errorMsg);

        if (errorMsg.toLowerCase().includes("password")) {
          setFormData({
            ...formData,
            password: "",
          });
        }
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="glass-card">
        <h2 className="title">Log In</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email_name"
            placeholder="Email or Username"
            value={formData.email_name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
          <p className="switch-auth-text"> New here? <a href="#/">Create an account</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;