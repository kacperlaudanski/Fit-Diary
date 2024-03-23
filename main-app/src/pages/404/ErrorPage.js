import styles from "./styles/error.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.error_page}>
      <div className={styles.error_container}>
        <h1 className={styles.error_header}>404</h1>
        <button className={styles.error_button} onClick={() => navigate("/")}>Back to Homepage</button>
      </div>
    </div>
  );
}
