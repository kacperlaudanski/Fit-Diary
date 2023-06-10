import React, { useContext, useState } from "react";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import RegisterButton from "../Features/Buttons/Login&RegisterButton";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const firebaseConfig = useContext(FirebaseConfig);
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function registerHandler() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log(`User created ! ${email}`);
        navigate("/get-started");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <React.Fragment>
      <FirebaseConfig.Provider value={firebaseConfig}>
        <div className="register-container">
          <h1>Create an account 🚀</h1>
          <Form className="form-container">
            <Input
              type="text"
              placeholder="Firstname"
              className="register-input-container"
              inputClass="register-input"
              iconboxClass="icon-container"
              icon={faUser}
            />
            <Input
              type="text"
              placeholder="Lastname"
              className="register-input-container"
              inputClass="register-input"
              iconboxClass="icon-container"
              icon={faUser}
            />
            <Input
              type="password"
              placeholder="Password"
              className="register-input-container"
              inputClass="register-input"
              iconboxClass="icon-container"
              icon={faKey}
              onChange={passwordHandler}
            />
            <Input
              type="email"
              placeholder="E-mail"
              className="register-input-container"
              inputClass="register-input"
              iconboxClass="icon-container"
              icon={faEnvelope}
              onChange={emailHandler}
            />
            <RegisterButton buttonHandler={registerHandler}>
              Create an account
            </RegisterButton>
            <small>
              Already have an account ? <NavLink to="/login">Log in</NavLink>
            </small>
          </Form>
        </div>
      </FirebaseConfig.Provider>
    </React.Fragment>
  );
};

export default Register;
