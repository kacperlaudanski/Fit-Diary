import React from "react";
import '../features.css' 

const Button = (props) => {
    return (
        <button className="login-register-button" type='button'>{props.children}</button>
    )
}

export default Button; 