import React from "react";
import { useNavigate } from "react-router-dom";
import UserAvatar from '../../../images/user.png'
import navStyles from "./styles/navbar.module.css";
import { getAuth, signOut } from "firebase/auth";

export default function MainNavbar() {
  const navigate = useNavigate();

  function logoutHandler() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((err) => {
        navigate("/error");
      });
  }
  return (
    <>
      <img
        src={UserAvatar}
        alt="user-avatar"
        className={navStyles.navbar_user_avatar}
      ></img>
      <button
        className={navStyles.logout_button}
        type="button"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </>
  );
}
