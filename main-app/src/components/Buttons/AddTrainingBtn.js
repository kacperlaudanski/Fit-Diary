import styles from './styles/buttons.module.css'

export default function AddTrainingBtn(props) {
  return (
    <button
      type="button"
      className={styles.add_training_button}
      onClick={props.trainingAddFormHandler}
    >
      + Add Training
    </button>
  );
}
