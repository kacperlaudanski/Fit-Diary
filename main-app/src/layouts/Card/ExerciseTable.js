import styles from './styles/card.module.css'

const ExerciseTable = () => {
  return (
    <div className={styles.exer_stats_table}>
      <div className={styles.exer_table_col}>Name</div>
      <div className={styles.exer_table_col}>Series</div>
      <div className={styles.exer_table_col}>Reps</div>
      <div className={styles.exer_table_col}>Loading [kg]</div>
      <div className={styles.exer_table_col}>Volume [kg]</div>
      <div className={`${styles.exer_table_col} ${styles.exer_last_stat}`}></div>
    </div>
  );
};

export default ExerciseTable;
