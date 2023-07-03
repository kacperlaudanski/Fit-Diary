import React from "react";
import styles from "./styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.content_container}>
        <div className={styles.logo}>FitDiary®</div>
        <div className={styles.info}>
          Created by Kacper Laudański © <br />
          <a href="https://www.freepik.com/free-vector/bodybuilder-with-sports-nutrition-plastic-containers-with-protein-powder-sports-nutrition-sports-supplements-ergogenic-aids-use-concept-pinkish-coral-bluevector-isolated-illustration_11664196.htm">
            Images by vectorjuice
          </a>
        </div>
        <div className={styles.socials}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
