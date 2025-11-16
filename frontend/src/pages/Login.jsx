import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { API_BASE_URL } from "../configs";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ user, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email_name: "",
    password: "",
  });

  const navigate = useNavigate();

  // If already logged in, don’t show login form — send them home
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
        formData,
        { withCredentials: true }
      );

      // backend now returns { message, user: { id, username, email, display_name } }
      const userData = res.data.user;
      alert(`${res.data.message} Welcome, ${userData.display_name}.`);

      // update global auth state in App.jsx
      if (onLoginSuccess) {
        onLoginSuccess(userData);
      }

      // clear form
      setFormData({
        email_name: "",
        password: "",
      });

      // go to landing/dashboard
      navigate("/");

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
          <p className="switch-auth-text">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
