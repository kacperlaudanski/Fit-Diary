import ReactDOM from "react-dom";
import Form from '../../components/FormWrapper/FormWrapper';
import styles from "./styles/modals.module.css";
import Input from "../../components/Input/Input";
import {
  faRepeat,
  faDumbbell,
  faWeightHanging,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";

export const Overlay = (props) => {
  return <div className={styles.overlay}></div>;
};

const ModalExcerciseForm = (props) => {
  return (
    <div className={styles.add_ex_container}>
      <h1>{props.title}</h1>
      <Form className={styles.add_ex_form}>
        <Input
          className={styles.ex_add_input_container}
          iconboxClass={styles.ex_icon}
          placeholder="Excercise"
          type="text"
          onChange={props.onExcerciseChange}
          inputClass={styles.ex_input}
          icon={faDumbbell}
        />
        <Input
          className={styles.ex_add_input_container}
          iconboxClass={styles.ex_icon}
          placeholder="Series"
          type="number"
          onChange={props.onSeriesChange}
          inputClass={styles.ex_input}
          icon={faListOl}
        />
        <Input
          className={styles.ex_add_input_container}
          iconboxClass={styles.ex_icon}
          placeholder="Reps"
          type="number"
          onChange={props.onRepsChange}
          inputClass={styles.ex_input}
          icon={faRepeat}
        />
        <Input
          className={styles.ex_add_input_container}
          iconboxClass={styles.ex_icon}
          placeholder="Loading"
          type="number"
          onChange={props.onLoadingChange}
          inputClass={styles.ex_input}
          icon={faWeightHanging}
        />
        <div className={styles.buttons_container}>
          <button
            type="button"
            onClick={props.onClick}
          >
            {props.action_btn}
          </button>
          <button
            type="button"
            onClick={props.cancelHandler}
            className={styles.cancel_button}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

const FormExcerciseBackdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalExcerciseForm
          onClick={props.onClick}
          onExcerciseChange={props.onExcerciseChange}
          onSeriesChange={props.onSeriesChange}
          onRepsChange={props.onRepsChange}
          onLoadingChange={props.onLoadingChange}
          cancelHandler={props.cancelHandler}
          title = {props.title}
          action_btn = {props.action_btn}
        />,
        document.getElementById("excercise-modal-form-root")
      )}
    </>
  );
};

export default FormExcerciseBackdrop;