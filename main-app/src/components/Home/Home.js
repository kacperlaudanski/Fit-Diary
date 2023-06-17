import React from "react";
import Navbar from "../Features/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Image from "../../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./home.css";

const Home = () => {

library.add(faTwitter, faInstagram, faLinkedin, faYoutube);

  return (
    <React.Fragment>
      <div className="container">
        <Navbar>
          <li>About Us</li>
          <li>Support</li>
          <li>Contact</li>
          <NavLink className="navbar-login-button" to="/login">
            Login
          </NavLink>
        </Navbar>

        <div className="content-container">
          <div className="text-container">
            <h1>The Best Way To Enhance Your Training</h1>
            <p>
              Achieve your fitness goals with ease using our user-friendly
              interface. Track your workouts and monitor your progress like
              never before. Join our community and turn your aspirations into
              achievements. Start your fitness journey now with our{" "}
              <span>FitDiary</span>!
            </p>
            <NavLink className="get-started-button" to="/register">
              Get started
            </NavLink>
            <footer className="social-media">
              <a>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-media-icon"
                />
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-media-icon"
                />
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="social-media-icon"
                />
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social-media-icon"
                />
              </a>  
            </footer>
          </div>
          <div className="image-container">
            <img src={Image} alt="decoration" className="decoration"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
