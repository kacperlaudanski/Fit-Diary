import React from "react";
import Navbar from "../../components/Features/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Image from "../../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./styles/home.module.css";
import navstyles from "../Features/Navbar/styles/navbar.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.home_container}>
        <Navbar elementsClass={navstyles.home_navbar}>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <NavLink className={navstyles.navbar_login_button} to="/login">
            Login
          </NavLink>
        </Navbar>

        <div className={styles.content_container}>
          <div className={styles.text_container}>
            <h1>The Best Way To Enhance Your Training</h1>
            <p>
              Achieve your fitness goals with ease using our user-friendly
              interface. Track your workouts and monitor your progress like
              never before. Join our community and turn your aspirations into
              achievements. Start your fitness journey now with our{" "}
              <span>FitDiary</span>!
            </p>
            <NavLink className={styles.get_started_button} to="/register">
              Get started
            </NavLink>
            <footer className={styles.social_media_container}>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.social_media_icon}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.social_media_icon}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={styles.social_media_icon}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.social_media_icon}
                />
              </a>
            </footer>
          </div>
          <div className={styles.image_container}>
            <img src={Image} alt="decoration"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
