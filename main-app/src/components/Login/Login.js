import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import "./login.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const firebaseConfigPack = useContext(FirebaseConfig);
  const {currentUser, dispatch} = useContext(AuthContext); 
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isRemembered, setRememberMe] = useState(false);

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  /*function rememberMeHandler() {
    setRememberMe((prev) => {
      return !prev;
    });
    if (isRemembered) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("checkbox", isRemembered)
    } 
    if (!isRemembered){
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("checkbox")
    }
  }*/

  useEffect(() => {
    setEmail(localStorage.getItem("email"))
    setPassword(localStorage.getItem("password"))
   // setRememberMe(localStorage.getItem("checkbox"))
  }, [])

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        dispatch({type: 'LOGIN', payload: cred.user})
        navigate("/main");
      })
      .catch((err) => {
        console.log(err.message);
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
            <Input
              type="email"
              placeholder="E-mail"
              onChange={emailHandler}
              className="login-input-container"
              iconboxClass="icon-container"
              inputClass="login-input"
              icon={faEnvelope}
             // value = {localStorage.getItem("email")}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
              className="login-input-container"
              iconboxClass="icon-container"
              inputClass="login-input"
              icon={faKey}
             // value = {localStorage.getItem("password")}
            />
            <LoginButton buttonHandler={login}>Log in</LoginButton>
            <div className="login-options">
              <div className="remember-me">
                <input type="checkbox" /*onChange={rememberMeHandler} checked = {isRemembered}*/></input>
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
