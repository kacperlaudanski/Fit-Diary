import { useContext } from "react";
import styles from "./styles/card.module.css";
import AddExBtn from "./AddExerciseButton";
import ExerciseTable from "./ExerciseTable";
import { db } from "../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const TrainingCard = (props) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  async function deleteTrainingHandler(event) {
    try {
      await deleteDoc(
        doc(db, `users/${currentUser.uid}/Trainings`, event.target.id)
      );
    } catch (err) {
      navigate("/error");
    }
  }
  return (
    <div className={styles.training_card_container}>
      <div className={styles.training_card}>
        <div className={styles.training_card_action_btn}>
          <button
            onClick={props.editHandler}
            className={styles.edit_btn_white}
            id={props.editBtnId}
          ></button>
          <button
            onClick={deleteTrainingHandler}
            className={styles.delete_btn_white}
            id={props.deleteBtnId}
          ></button>
        </div>
        <div className={styles.training_card_date_label}>
          <FontAwesomeIcon icon={faCalendarDays} />
          <h3 className={styles.training_card_date}>{props.date}</h3>
        </div>
        <h1 className={styles.training_card_title}>{props.title}</h1>
        <ExerciseTable />
        {props.children}
      </div>
      <AddExBtn onClick={props.onClick} id={props.exBtnId} />
    </div>
  );
};

export default TrainingCard;
