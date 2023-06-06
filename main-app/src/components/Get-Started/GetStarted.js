import React from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../Features/Buttons/Login&RegisterButton";
import "./get-started.css";

const GetStarted = () => {
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <div className="get-started-container">
      <div className="content-box">
        <h1>Welcome ! Log in and start your dream fit life !</h1>
        <LoginButton buttonHandler={login}>Log in</LoginButton>
      </div>
    </div>
  );
};

export default GetStarted;
