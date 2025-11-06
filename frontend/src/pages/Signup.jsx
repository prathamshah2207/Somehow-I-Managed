import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="glass-card">
        <h2 className="title">Create Account</h2>
        <form className="signup-form">
  <input type="email" placeholder="Email" required />
  <input type="text" placeholder="Username" required />
  <input type="password" placeholder="Password" required />
  <input type="text" placeholder="Display Name" required />
  <button type="submit">Sign Up</button>
</form>

        
      </div>
    </div>
  );
}

export default Signup;
