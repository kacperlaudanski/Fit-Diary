import React from "react";
import styles from './styles/card.module.css'

const ExerciseTable = () => {
  return (
    <div className={styles.stats_table}>
      <div className={styles.table_col}>Name</div>
      <div className={styles.table_col}>Series</div>
      <div className={styles.table_col}>Reps</div>
      <div className={styles.table_col}>Loading [kg]</div>
      <div className={styles.table_col}>Volume [kg]</div>
      <div className={`${styles.table_col} ${styles.last_stat}`}></div>
    </div>
  );
};

export default ExerciseTable;
