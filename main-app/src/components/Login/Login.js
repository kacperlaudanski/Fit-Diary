import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import styles from "./styles/login.module.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/auth-context";
import WorkoutImg from "../../images/workout.png";

const Login = () => {
  const firebaseConfigPack = useContext(FirebaseConfig);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState(true);

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  /*function checkboxHandler(event){
     if(event.target.checked){
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      localStorage.setItem('isChecked', true)
     }else{
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.setItem('isChecked', false)
     }
  }*/

  function login() {
    signInWithEmailAndPassword(auth, email, password)
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
      <FirebaseConfig.Provider value={firebaseConfigPack}>
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
                <div className={styles.remember_me}>
                  <input
                    type="checkbox"
                    // onChange = {checkboxHandler}
                  ></input>
                  <label>Remember me</label>
                </div>
                <NavLink to="/register">Don't have an account ?</NavLink>
              </div>
            </Form>
          </div>
          <div className={styles.image_container}>
            <img src={WorkoutImg} alt="outside-workout"></img>
          </div>
        </div>
      </FirebaseConfig.Provider>
    </React.Fragment>
  );
};

export default Login;
