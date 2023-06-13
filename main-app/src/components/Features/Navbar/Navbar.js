import React from "react";
import '../features.css' 

const Navbar = (props) => {
    return (
        <nav className="navbar">
          <h2>FitDiary</h2>
          <ul className="tabs">
            {props.children}
          </ul>
        </nav>
    )
}

export default Navbar; 