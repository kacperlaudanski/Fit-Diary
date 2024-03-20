import React from "react";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <h2>FitDiary®</h2>
      <label className={styles.hamburger_menu}>
        <input type="checkbox"></input>
      </label>
      <ul className={props.elementsClass}>
        {props.children}
      </ul>
    </nav>
  );
};

export default Navbar;
