import React from "react";
import '../features.css' 

const Navbar = () => {
    return (
        <nav className="navbar">
          <h2>Logolink</h2>
          <ul className="tabs">
             <li>Home</li>
             <li>About</li>
             <li>Trainings</li>
          </ul>
        </nav>
    )
}

export default Navbar; 