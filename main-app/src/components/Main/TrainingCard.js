import React from "react";
import "./main.scss";
import AddEx from "./AddExButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const TrainingCard = (props) => {

  function excerciseHandler(){
    
  }

  return (
  <div className="training-card-container">
    <div className="training-card">
      <div className="training-card-date">
        <FontAwesomeIcon icon={faCalendarDays} /> 
        <h3 className="date">{props.date}</h3>
      </div>
      <h1 className="training-card-title">{props.title}</h1>
    </div>
    <AddEx onClick={excerciseHandler}/> 
  </div>

  );
};

export default TrainingCard;
