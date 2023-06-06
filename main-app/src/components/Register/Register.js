import React, { useContext, useRef } from "react";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import RegisterButton from "../Features/Buttons/Login&RegisterButton";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const firebaseConfig = useContext(FirebaseConfig);
  const navigate = useNavigate()
  const auth = getAuth();

  const email = useRef(null);
  const password = useRef(null);

  function registerHandler() {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        console.log(`User created ! ${email}`);
        email.current.value = "";
        password.current.value = "";
        navigate("/get-started")
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
            <Input type="text" placeholder="Firstname" />
            <Input type="text" placeholder="Lastname" />
            <Input type="password" placeholder="Password" refer={password} />
            <Input type="email" placeholder="E-mail" refer={email} />
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
