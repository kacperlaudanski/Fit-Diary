import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import "./login.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const firebaseConfigPack = useContext(FirebaseConfig);
  const auth = getAuth();

  const email = useRef(null);
  const password = useRef(null);

  function login() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((cred) => {
        console.log(`${cred.user.email} logged in!`);
        email.current.value = ''
        password.current.value = ''
      })
      .catch((err) => {
        console.log("sth went wrong :(");
      });
  }

  return (
    <React.Fragment>
      <FirebaseConfig.Provider value={firebaseConfigPack}>
        <div className="login-container">
          <h1>Hey, hello 👋</h1>
          <small className="message">
            Enter the information you entered while registering.
          </small>
          <Form className="form-container">
            <Input type="email" placeholder="E-mail" refer={email} />
            <Input type="password" placeholder="Password" refer={password} />
            <LoginButton buttonHandler={login}>Log in</LoginButton>
            <div className="login-options">
              <div className="remember-me">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <NavLink to="/register">Don't have an account ?</NavLink>
            </div>
          </Form>
        </div>
      </FirebaseConfig.Provider>
    </React.Fragment>
  );
};

export default Login;
