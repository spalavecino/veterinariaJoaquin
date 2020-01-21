import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <main className="Login">
      <div className="container">
        <h3>Ingresar</h3>
        <button style={{ backgroundColor: "#fff", color: "#666" }}>
          <i className="fab fa-google"></i> <span>Sign in with Google</span>
        </button>
        <button style={{ backgroundColor: "#3b5998", color: "#fff" }}>
          <i className="fab fa-facebook-square"></i>
          <span>Sign in with Facebook</span>
        </button>
        <button style={{ color: "#333" }}>
          <i className="far fa-envelope"></i> <span>Sign in with email</span>
        </button>
      </div>
    </main>
  );
};

export default Login;
