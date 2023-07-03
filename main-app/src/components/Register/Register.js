import React, { useContext, useState } from "react";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import RegisterButton from "../Features/Buttons/Login&RegisterButton";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/register.module.css";
import FirebaseConfig from "../../context/firebase-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import BodybuilderImg from "../../images/bodybuilder.png";

const Register = () => {
  const firebaseConfig = useContext(FirebaseConfig);
  const navigate = useNavigate();
  const auth = getAuth();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameValidation, setFirstnameValidation] = useState(true);
  const [lastnameValidation, setLastnameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  function checkValidation(input, condition, setStateFunction) {
    if (!input.match(condition)) {
      setStateFunction(false);
    } else {
      setStateFunction(true);
    }
    //input.length === 0 && setStateFunction(true);
  }

  function firstnameHandler(event) {
    checkValidation(
      event.target.value,
      /^.+$/,
      setFirstnameValidation
    );
    setFirstname(event.target.value);
  }

  function lastnameHandler(event) {
    checkValidation(
      event.target.value,
      /^.+$/,
      setLastnameValidation
    );
    setLastname(event.target.value);
  }

  function emailHandler(event) {
    checkValidation(
      event.target.value,
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      setEmailValidation
    );
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    checkValidation(
      event.target.value,
      /^.{6,}$/,
      setPasswordValidation
    );
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
        <div className={styles.container}>
          <div className={styles.register_container}>
            <h1>Create an account 🚀</h1>
            <Form className={styles.form_container}>
              <Input
                type="text"
                placeholder="Firstname"
                className={`${styles.register_input_container} ${!firstnameValidation && styles.error}`} 
                inputClass={styles.register_input}
                iconboxClass={styles.icon_container}
                icon={faUser}
                onChange={firstnameHandler}
                errorMessage = {!firstnameValidation && 'Invalid value'}
              />
              <Input
                type="text"
                placeholder="Lastname"
                className={`${styles.register_input_container} ${!lastnameValidation && styles.error}`}
                inputClass={styles.register_input}
                iconboxClass={styles.icon_container}
                icon={faUser}
                onChange={lastnameHandler}
                errorMessage = {!lastnameValidation && 'Invalid value'}
              />
              <Input
                type="password"
                placeholder="Password"
                className={`${styles.register_input_container} ${!passwordValidation && styles.error}`}
                inputClass={styles.register_input}
                iconboxClass={styles.icon_container}
                icon={faKey}
                onChange={passwordHandler}
                errorMessage = {!passwordValidation && 'Min 6 char.'}
              />
              <Input
                type="email"
                placeholder="E-mail"
                className={`${styles.register_input_container} ${!emailValidation && styles.error}`}
                inputClass={styles.register_input}
                iconboxClass={styles.icon_container}
                icon={faEnvelope}
                onChange={emailHandler}
                errorMessage = {!emailValidation && 'Invalid email'}
              />
              <RegisterButton
                buttonHandler={registerHandler}
                disabled={
                 !firstnameValidation || !lastnameValidation || !emailValidation || !passwordValidation ? true : false
                }
              >
                Create an account
              </RegisterButton>
              <small>
                Already have an account ? <NavLink to="/login">Log in</NavLink>
              </small>
            </Form>
          </div>
          <div className={styles.image_container}>
            <img src={BodybuilderImg} alt="bodybuilder"></img>
          </div>
        </div>
      </FirebaseConfig.Provider>
    </React.Fragment>
  );
};

export default Register;
