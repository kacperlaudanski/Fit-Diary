import React from "react";
import ReactDOM from "react-dom";
import Form from "../Form/FormWrapper";
import "../features.css";
import Input from "../Input/Input";

const Overlay = (props) => {
  return <div className="overlay"></div>;
};

const ModalForm = (props) => {
  return (
    <div className="modal-form-container">
      <h1>Add Excercise</h1>
      <Form className="modal-form">
        <Input
          className="ex-add-input-container"
          iconboxClass="ex-icon"
          placeholder="Excercise"
          type="text"
          onChange={props.onChange}
          inputClass="ex-input"
        />
        <Input
          className="ex-add-input-container"
          iconboxClass="ex-icon"
          placeholder="Series"
          type="text"
          onChange={props.onChange}
          inputClass="ex-input"
        />
        <Input
          className="ex-add-input-container"
          iconboxClass="ex-icon"
          placeholder="Reps"
          type="text"
          onChange={props.onChange}
          inputClass="ex-input"
        />
        <Input
          className="ex-add-input-container"
          iconboxClass="ex-icon"
          placeholder="Loading"
          type="text"
          onChange={props.onChange}
          inputClass="ex-input"
        />
        <button
          type="button"
          onClick={props.onClick}
          className="add-excercise-button"
        >
          + Add Excercise
        </button>
      </Form>
    </div>
  );
};

const FormBackdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalForm onClick={props.onClick} onChange={props.onChange} />,
        document.getElementById("modal-form-root")
      )}
    </React.Fragment>
  );
};

export default FormBackdrop;
