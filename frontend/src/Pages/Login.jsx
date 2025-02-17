import React from "react";
import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="Password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>
            Buy continuing , you agree to our <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
