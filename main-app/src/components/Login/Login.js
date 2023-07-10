import React, { useContext, useReducer, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import styles from "./styles/login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/auth-context";
import WorkoutImg from "../../images/workout.png";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const DEFAULT_VALUES = {
  email: null,
  password: null,
};

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [state, loginDispatch] = useReducer(loginReducer, DEFAULT_VALUES);

  const [validation, setValidation] = useState(true);

  function emailHandler(event) {
    loginDispatch({ type: "EMAIL", payload: event.target.value });
  }

  function passwordHandler(event) {
    loginDispatch({ type: "PASSWORD", payload: event.target.value });
  }

  function login() {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((cred) => {
        dispatch({ type: "LOGIN", payload: cred.user });
        navigate("/main");
      })
      .catch((err) => {
        setValidation(false);
      });
  }

  return (
    <React.Fragment>
        <div className={styles.container}>
          <div className={styles.login_container}>
            <h1>Hey, hello 👋</h1>
            <small className={styles.message}>
              Enter the information you entered while registering.
            </small>
            <Form className={styles.form_container}>
              <Input
                type="email"
                placeholder="E-mail"
                onChange={emailHandler}
                className={styles.login_input_container}
                iconboxClass={styles.icon_container}
                inputClass={styles.login_input}
                icon={faEnvelope}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={passwordHandler}
                className={styles.login_input_container}
                iconboxClass={styles.icon_container}
                inputClass={styles.login_input}
                icon={faKey}
              />
              {!validation && (
                <p className={styles.login_error}>Wrong email or password !</p>
              )}
              <LoginButton buttonHandler={login}>Log in</LoginButton>
              <div className={styles.login_options}>
                <NavLink to="/register">Don't have an account ?</NavLink>
              </div>
            </Form>
          </div>
          <div className={styles.image_container}>
            <img src={WorkoutImg} alt="outside-workout"></img>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Login;
