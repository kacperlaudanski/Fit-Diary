import styles from './styles/card.module.css'

const Excercise = (props) => {
  return (
    <div className={styles.exer_container}>
      <div className={`${styles.exer_col} ${styles.first_col}`}>{props.excercise}</div>
      <div className={styles.exer_col}>{props.series}</div>
      <div className={styles.exer_col}>{props.reps}</div>
      <div className={styles.exer_col}>{props.loading}</div>
      <div className={styles.exer_col}>{props.volume}</div>
      <div className={`${styles.exer_col} ${styles.exer_col_action}`}>
        <button onClick={props.onExEditHandler} id={props.exID} className={`${styles.exer_action_btn} ${styles.exer_edit_btn}`}></button>
        <button onClick={props.onExDeleteHandler} id={props.exID} className={`${styles.exer_action_btn} ${styles.exer_delete_btn}`}></button>
      </div>
    </div>
  );
};

export default Excercise;
