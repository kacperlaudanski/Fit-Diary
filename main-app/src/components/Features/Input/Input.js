import React from "react"; 
import '../features.css'

const Input = (props) => {
    return (
      <div className="input-container">
        <div className="icon-box">
         
        </div>
        <input type={props.type} placeholder={props.placeholder} ref={props.refer}></input>
      </div>
    )
}

export default Input; 