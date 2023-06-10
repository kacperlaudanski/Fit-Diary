import React from "react";
import "../features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = (props) => {
  return (
    <div className={props.className}>
      <div className={props.iconboxClass}>
        <FontAwesomeIcon icon={props.icon}/> 
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={props.inputClass}
        value = {props.value}
      ></input>
    </div>
  );
};

export default Input;
