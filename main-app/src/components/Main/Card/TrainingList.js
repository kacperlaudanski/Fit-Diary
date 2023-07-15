import React, { useCallback, useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styles from "./styles/card.module.css";
import TrainingCard from "./TrainingCard";
import ExcerciseList from "./ExcerciseList";
import EmptyTraining from "../../Features/EmptyBox/EmptyTraining";
import Loader from "../../Features/Loader/Loader";
import LoadingError from "../../Features/Error/LoadingError";
import { collection } from "@firebase/firestore";
import { AuthContext } from "../../../context/auth-context";
import { db } from "../../../firebase";
import Pagination from "../../Features/Pagination/Pagination";

const TrainingList = ({
  searchQuery,
  setEditState,
  setTrainingForm,
  setCurrentTraining,
  setExcerciseForm,
  setCurrentEx,
}) => {
  const { currentUser } = useContext(AuthContext);
  const trainingsQuery = useCallback(
    collection(db, `users/${currentUser.uid}/Trainings`),
    [collection]
  );
  const [loadedTrainings, trainingLoading, trainingError] =
    useCollectionData(trainingsQuery);

  const filteredTrainings = loadedTrainings?.filter((training) => {
    return training.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const excerciseAddFormHandler = (event) => {
    setEditState(false);
    setCurrentTraining(event.target.id);
    setExcerciseForm(true);
  };

  //PAGINATION

  const [currentPage, setCurrentPage] = useState(1);
  const trainingsPerPage = 5;
  const lastTrainingIndex = trainingsPerPage * currentPage;
  const firstTrainingIndex = lastTrainingIndex - trainingsPerPage;

  const selectedTrainings = filteredTrainings?.slice(
    firstTrainingIndex,
    lastTrainingIndex
  );
  return (
    <React.Fragment>
      <div className={styles.training_list}>
        {filteredTrainings?.length === 0 && <EmptyTraining />}
        {trainingError && <LoadingError error={trainingError} />}
        {trainingLoading && <Loader />}
        {selectedTrainings?.map((training) => {
          return (
            <TrainingCard
              key={training.trainingId}
              date={training.date}
              title={training.name}
              onClick={excerciseAddFormHandler}
              editBtnId={training.trainingId}
              deleteBtnId={training.trainingId}
              editHandler={(event) => {
                setCurrentTraining(event.target.id);
                setEditState(true);
                setTrainingForm(true);
              }}
              exBtnId={training.trainingId}
            >
              <ExcerciseList
                path={`users/${currentUser.uid}/Trainings/${training.trainingId}/Excercises`}
                editExHandler={(event) => {
                  setCurrentEx(event.target.id);
                  setCurrentTraining(training.trainingId);
                  setExcerciseForm(true);
                  setEditState(true);
                }}
              />
            </TrainingCard>
          );
        })}
      </div>
      {selectedTrainings?.length > 0 && (
        <Pagination
          totalLength={filteredTrainings?.length}
          trainingsPerPage={trainingsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </React.Fragment>
  );
};

export default TrainingList;
