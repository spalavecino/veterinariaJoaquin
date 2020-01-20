import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <main className="Login">
      <div className="container">
        <h3>Ingresar</h3>
        <button>
          <i className="fab fa-google"></i> <span>Sign in with Google</span>
        </button>
        <button style={{ backgroundColor: "#3b5998" }}>
          <i className="fab fa-facebook-square"></i>
          <span>Sign in with Facebook</span>
        </button>
        <button>
          <i className="far fa-envelope"></i> <span>Sign in with email</span>
        </button>
      </div>
    </main>
  );
};

export default Login;
