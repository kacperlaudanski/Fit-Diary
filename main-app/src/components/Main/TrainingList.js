import React from "react";
import './main.css'


const TrainingList = (props) => {
   return (
    <div className="training-list">
       <h2>+ Trainings</h2>
       {props.children}
    </div>
   )
}

export default TrainingList; 