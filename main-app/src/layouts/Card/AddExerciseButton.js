import React from "react";
import styles from './styles/card.module.css'

const AddEx = (props) => {
  return (
    <button
      id={props.id}
      type="button"
      className={styles.add_excercise_button}
      onClick={props.onClick}
    >
      + Add Exercise
    </button>
  );
};

export default AddEx;
