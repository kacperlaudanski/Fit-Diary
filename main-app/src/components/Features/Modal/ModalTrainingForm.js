import React from "react";
import ReactDOM from "react-dom";
import { Overlay } from "./ModalExcerciseForm";
import Input from "../Input/Input";
import Form from "../Form/FormWrapper";
import styles from "./styles/modals.module.css";
import { faCalendar, faFile } from "@fortawesome/free-regular-svg-icons";

const ModalTrainingForm = (props) => {
  return (
    <div className={styles.add_training_container}>
      <h2>{props.title}</h2>
      <Form className={styles.add_training_form}>
        <Input
          type="date"
          onChange={props.handleDateChange}
          className = {styles.training_input_group}
          iconboxClass = {styles.icon_box}
          inputClass={styles.training_input}
          placeholder="Date"
          icon = {faCalendar}
        />
        <Input
          type="text"
          onChange={props.handleNameChange}
          className = {styles.training_input_group}
          iconboxClass = {styles.icon_box}
          inputClass={styles.training_input}
          placeholder="Training Title"
          icon = {faFile}
        />
        <div className={styles.buttons_container}>
          <button
            type="button"
            onClick={props.addTrainingHandler}
          >
            {props.action_btn}
          </button>
          <button
            className={styles.cancel_button}
            type="button"
            onClick={props.cancelHandler}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

const FormTrainingBackdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalTrainingForm
          handleDateChange={props.handleDateChange}
          handleNameChange={props.handleNameChange}
          addTrainingHandler={props.addTrainingHandler}
          cancelHandler={props.cancelHandler}
          title = {props.title}
          action_btn = {props.action_btn}
        />,
        document.getElementById("training-modal-form-root")
      )}
    </React.Fragment>
  );
};

export default FormTrainingBackdrop;
