import React from "react";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import RegisterButton from "../Features/Buttons/Login&RegisterButton";
import { NavLink } from "react-router-dom";
import "./register.css";
const Register = () => {
  return (
    <React.Fragment>
      <div className="register-container">
        <h1>Create an account 🚀</h1>
        <Form className="form-container">
          <Input type="text" placeholder="Firstname" />
          <Input type="text" placeholder="Lastname" />
          <Input type="password" placeholder="Password" />
          <Input type="email" placeholder="E-mail" />
          <RegisterButton>Create an account</RegisterButton>
          <small>
            Already have an account ? <NavLink to="/login">Log in</NavLink>
          </small>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Register;
