import React from "react";
import styles from './styles/navbar.module.css' 

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
          <h2>FitDiary</h2>
          <ul className={props.elementsClass}>
            {props.children}
          </ul>
        </nav>
    )
}

export default Navbar; 