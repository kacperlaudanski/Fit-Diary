import React from "react";
import Decoration from '../../images/decoration.jpg'
import { NavLink } from "react-router-dom";

import './home.css'


const Home = () => {
    return (
        <React.Fragment>
        <div className="container">
          <div className="content-container">
            <h1 className="logo">FitDiary</h1>
            <p className="quotation">"The only way to define your limits is by going beyond them." </p>
            <br></br>
            <br></br>
            <p className="quotation">Arthur C. Clarke</p>
            <div className="action-buttons">
              <NavLink><button className="login-button">Log in</button></NavLink>
              <NavLink to='register'><button className="register-button">Register</button></NavLink>
            </div>
          </div>
          <div className="decoration-container">
            <img src={Decoration} alt="gym-equipment" className="decoration-image"></img>
          </div>
        </div>
       </React.Fragment>
    )
}


export default Home; 