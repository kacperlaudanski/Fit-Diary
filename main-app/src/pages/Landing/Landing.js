import Navbar from "../../layouts/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Image from "../../images/man.png";
import LandingFooter from "../../layouts/Footers/LandingFooter";
import styles from "./styles/landing.module.css";
import navstyles from "../../layouts/Navbar/styles/navbar.module.css";

function Landing() {
  return (
    <>
      <div className={styles.landing_container}>
        <Navbar elementsClass={navstyles.landing_navbar}>
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

        <div className={styles.landing_content_box}>
          <div className={styles.landing_text_box}>
            <h1 className={styles.landing_text_header}>
              The Best Way To Enhance Your Training
            </h1>
            <p className={styles.landing_text_paragraph}>
              Achieve your fitness goals with ease using our user-friendly
              interface. Track your workouts and monitor your progress like
              never before. Join our community and turn your aspirations into
              achievements. Start your fitness journey now with our{" "}
              <span className={styles.landing_text_logo}>FitDiary</span>!
            </p>
            <NavLink className={styles.landing_cta_btn} to="/register">
              Get started
            </NavLink>
            <LandingFooter /> 
          </div>
          <div className={styles.landing_image}>
            <img src={Image} alt="decoration-image"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;