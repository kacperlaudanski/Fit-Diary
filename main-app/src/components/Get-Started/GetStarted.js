import React from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import styles from "./styles/get-started.module.css";

const GetStarted = () => {
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <div className={styles.get_started_container}>
      <div className={styles.content_box}>
        <h1>Welcome ! Log in and start your dream fit life !</h1>
        <LoginButton buttonHandler={login}>Log in</LoginButton>
      </div>
    </div>
  );
};

export default GetStarted;
