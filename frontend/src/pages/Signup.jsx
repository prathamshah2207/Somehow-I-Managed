import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { API_BASE_URL } from "../configs";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    display_name: "",
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

      const res = await axios.post(`${API_BASE_URL}/core/signup/`, formData);
      alert(res.data.message);

      // reset form if signup succeeds
      setFormData({
        email: "",
        username: "",
        password: "",
        display_name: "",
      })
    } catch (error) {
      if (error.response && error.response.data.error) {
        const errorMsg = error.response.data.error;
        alert(errorMsg);
        if (errorMsg.includes("Username")) {
          setFormData({
            ...formData,
            username: "",
          });
        } else if (errorMsg.includes("Email")) {
          setFormData({
            ...formData,
            email: "",
          });
        }
      } else{
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="glass-card">
        <h2 className="title">Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
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
          <input
            type="text"
            name="display_name"
            placeholder="Display Name"
            value={formData.display_name}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <p className="switch-auth-text"> Already have an account? <a href="/login">Log in</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
