import React from "react";
import styles from "./styles/errors.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.error_page}>
      <div className={styles.container}>
        <h1>404</h1>
        <button onClick={() => navigate("/")}>Back to Homepage</button>
      </div>
    </div>
  );
}
