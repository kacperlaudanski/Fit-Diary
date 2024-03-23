import React from "react";
import styles from "./styles/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.wave}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  );
};

export default Loader;
