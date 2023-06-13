import React from "react";
import "./main.css";

const AddEx = (props) => {
  return (
    <button
      type="button"
      className="add-training-button"
      onClick={props.onClick}
    >
      + Add Excercise
    </button>
  );
};

export default AddEx;
