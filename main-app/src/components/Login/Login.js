import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import "./login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-container">
        <h1>Hey, hello 👋</h1>
        <small class="message">
          Enter the information you entered while registering.
        </small>
        <Form className="form-container">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <LoginButton>Log in</LoginButton>
          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <NavLink to="/register">Don't have an account ?</NavLink>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Login;
