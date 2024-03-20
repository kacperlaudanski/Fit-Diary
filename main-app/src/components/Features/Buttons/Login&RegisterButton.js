import React from "react";
import styles from './styles/buttons.module.css'

const Button = (props) => {
    return (
        <button className={styles.login_register_button} type='button' onClick={props.buttonHandler} disabled={props.disabled}>{props.children}</button>
    )
}

export default Button; 