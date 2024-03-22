import React from "react";
import Input from "../Input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../../../pages/Main/styles/main.module.css'

const ButtonSearch = (props) => {
  return (
    <div className={styles.button_search_container}>
      <button
        type="button"
        className={styles.add_training_button}
        onClick={props.trainingAddFormHandler}
      >
        + Add Training
      </button>
      <Input
        className={styles.search_input_group}
        type="search"
        placeholder="Search"
        inputClass={styles.search_input}
        iconboxClass={styles.icon_box}
        onChange = {props.onChange}
        value = {props.query}
        icon = {faSearch}
      />
    </div>
  );
};

export default ButtonSearch; 