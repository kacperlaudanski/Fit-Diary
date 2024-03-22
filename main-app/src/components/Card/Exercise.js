import React from "react";
import styles from './styles/card.module.css'

const Excercise = (props) => {
  return (
    <div className={styles.ex_container}>
      <div className={`${styles.ex_col} ${styles.first_col}`}>{props.excercise}</div>
      <div className={styles.ex_col}>{props.series}</div>
      <div className={styles.ex_col}>{props.reps}</div>
      <div className={styles.ex_col}>{props.loading}</div>
      <div className={styles.ex_col}>{props.volume}</div>
      <div className={`${styles.ex_col} ${styles.action_ex_col}`}>
        <button onClick={props.onExEditHandler} id={props.exID} className={styles.edit_btn}></button>
        <button onClick={props.onExDeleteHandler} id={props.exID} className={styles.delete_btn}></button>
      </div>
    </div>
  );
};

export default Excercise;
