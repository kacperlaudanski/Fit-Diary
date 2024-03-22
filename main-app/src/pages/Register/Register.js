import { useReducer, useState } from "react";
import Form from "../../components/Features/Form/FormWrapper";
import Input from "../../components/Features/Input/Input";
import RegisterButton from "../../components/Features/Buttons/Login&RegisterButton";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import BodybuilderImg from "../../images/bodybuilder.png";
import styles from "./styles/register.module.css";

const registerReducer = (state, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstname: action.payload };
    case "LASTNAME":
      return { ...state, lastname: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
const DEFAULT_VALUES = {
  firstname: null,
  lastname: null,
  password: null,
  email: null,
};

const Register = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(registerReducer, DEFAULT_VALUES);

  const [firstnameValidation, setFirstnameValidation] = useState(true);
  const [lastnameValidation, setLastnameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  function checkValidation(input, condition, setStateFunction) {
    if (!input.trim().match(condition)) {
      setStateFunction(false);
    } else {
      setStateFunction(true);
    }
  }

  function firstnameHandler(event) {
    checkValidation(event.target.value, /^.+$/, setFirstnameValidation);
    dispatch({ type: "FIRSTNAME", payload: event.target.value });
  }

  function lastnameHandler(event) {
    checkValidation(event.target.value, /^.+$/, setLastnameValidation);
    dispatch({ type: "LASTNAME", payload: event.target.value });
  }

  function emailHandler(event) {
    checkValidation(
      event.target.value,
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      setEmailValidation
    );
    dispatch({ type: "EMAIL", payload: event.target.value });
  }

  function passwordHandler(event) {
    checkValidation(event.target.value, /^.{6,}$/, setPasswordValidation);
    dispatch({ type: "PASSWORD", payload: event.target.value });
  }

  function registerHandler() {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(() => {
        navigate("/get-started");
      })
      .catch((err) => {
        navigate("/error");
      });
  }

  return (
        <div className={styles.register_page}>
          <div className={styles.register_container}>
            <h1 className={styles.register_header}>Create an account 🚀</h1>
            <Form className={styles.register_form_wrapper}>
              <Input
                type="text"
                placeholder="Firstname"
                className={`${styles.register_input_container} ${
                  !firstnameValidation && styles.error
                }`}
                inputClass={styles.register_input}
                iconboxClass={styles.register_input_icon}
                icon={faUser}
                onChange={firstnameHandler}
                errorMessage={!firstnameValidation && "Invalid value"}
              />
              <Input
                type="text"
                placeholder="Lastname"
                className={`${styles.register_input_container} ${
                  !lastnameValidation && styles.error
                }`}
                inputClass={styles.register_input}
                iconboxClass={styles.register_input_icon}
                icon={faUser}
                onChange={lastnameHandler}
                errorMessage={!lastnameValidation && "Invalid value"}
              />
              <Input
                type="password"
                placeholder="Password"
                className={`${styles.register_input_container} ${
                  !passwordValidation && styles.error
                }`}
                inputClass={styles.register_input}
                iconboxClass={styles.register_input_icon}
                icon={faKey}
                onChange={passwordHandler}
                errorMessage={!passwordValidation && "Min 6 char."}
              />
              <Input
                type="email"
                placeholder="E-mail"
                className={`${styles.register_input_container} ${
                  !emailValidation && styles.error
                }`}
                inputClass={styles.register_input}
                iconboxClass={styles.register_input_icon}
                icon={faEnvelope}
                onChange={emailHandler}
                errorMessage={!emailValidation && "Invalid email"}
              />
              <RegisterButton
                buttonHandler={registerHandler}
                disabled={
                  !firstnameValidation ||
                  !lastnameValidation ||
                  !emailValidation ||
                  !passwordValidation ||
                  state.firstname === null ||
                  state.lastname === null ||
                  state.password === null ||
                  state.email === null
                    ? true
                    : false
                }
              >
                Create an account
              </RegisterButton>
              <small>
                Already have an account ? <NavLink to="/login" className={styles.register_login_link}>Log in</NavLink>
              </small>
            </Form>
          </div>
          <div className={styles.register_image_container}>
            <img src={BodybuilderImg} className={styles.register_image} alt="bodybuilder"></img>
          </div>
        </div>
  );
};

export default Register;
