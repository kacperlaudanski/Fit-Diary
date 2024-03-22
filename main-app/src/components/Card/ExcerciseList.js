import React, { useCallback } from "react";
import {
  collection,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Exercise from "./Exercise"
import Loader from "../Features/Loader/Loader";
import LoadingError from "../Features/Error/LoadingError";
import { useNavigate } from "react-router-dom";
import EmptyExercise from '../Features/EmptyBox/EmptyExercise'

export default function ExcerciseList({ path, editExHandler }) {
  const navigate = useNavigate();
  const excerciseQuery = useCallback(collection(db, path), [collection]);
  const [loadedExcercises, exLoading, exError] =
    useCollectionData(excerciseQuery);

  async function deleteExHandler(event) {
    try {
      await deleteDoc(doc(db, path, event.target.id));
    } catch {
      navigate("/error");
    }
  }

  return (
    <>
      {loadedExcercises?.length === 0 && <EmptyExercise />}
      {exError && <LoadingError error={exError} />}
      {exLoading && <Loader />}
      {loadedExcercises?.map((ex, index) => {
        return (
          <Exercise
            key={index}
            excercise={ex.name}
            series={ex.series}
            reps={ex.reps}
            loading={ex.loading}
            volume={ex.volume}
            onExEditHandler={editExHandler}
            onExDeleteHandler={deleteExHandler}
            exID={ex.excerciseId}
          />
        );
      })}
    </>
  );
}
