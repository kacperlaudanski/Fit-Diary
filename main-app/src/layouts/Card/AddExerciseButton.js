import styles from './styles/card.module.css'

const AddExerBtn = (props) => {
  return (
    <button
      id={props.id}
      type="button"
      className={styles.add_exer_btn}
      onClick={props.onClick}
    >
      + Add Exercise
    </button>
  );
};

export default AddExerBtn;
