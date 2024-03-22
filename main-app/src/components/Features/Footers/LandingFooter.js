import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/footers.module.css";

export default function LandingFooter() {
  return (
    <footer className={styles.landing_footer}>
      <a href="#">
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.landing_footer_sm_icon}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.landing_footer_sm_icon}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faYoutube}
          className={styles.landing_footer_sm_icon}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faLinkedin}
          className={styles.landing_footer_sm_icon}
        />
      </a>
    </footer>
  );
}
