import React from "react";
import './main.scss'

const TrainingCard = (props) => {
  return (
    <div className="training-card">
      <h3>{props.date}</h3>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TrainingCard;
