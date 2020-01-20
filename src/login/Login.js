import React from "react";
import Button from "../components/button/Button";
import "./Login.scss";

const Login = () => {
  return (
    <main className="Login">
      <div className="container">
        <h3>Ingresar</h3>
        <Button
          icon="fab fa-google"
          text="Sign in with Google"
          fontColor="#666"
          background="#fff"
        />
        <Button
          icon="fab fa-facebook-square"
          text="Sign in with Facebook"
          background="#3b5998"
        />
        <Button
          icon="far fa-envelope"
          text="Sign in with Email"
          background="red"
        />
      </div>
    </main>
  );
};

export default Login;
