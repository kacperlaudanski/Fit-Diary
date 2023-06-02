import React from "react";
import '../features.css' 

const Button = (props) => {
    return (
        <button className="login-register-button" type='button' onClick={props.buttonHandler}>{props.children}</button>
    )
}

export default Button; 