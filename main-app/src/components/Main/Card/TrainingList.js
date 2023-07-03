import React from "react";
import styles from './styles/card.module.css'

const TrainingList = (props) => {
  return (
    <React.Fragment>
      <div className={styles.training_list}>{props.children}</div>
    </React.Fragment>
  );
};

export default TrainingList;
