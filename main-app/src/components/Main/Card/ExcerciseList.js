import React, { useCallback } from "react";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../context/firebase-context";
import Exercise from "./Exercise";

export default function ExcerciseList({ path, editExHandler }) {
  const excerciseQuery = useCallback(collection(db, path), [collection]);
  const [loadedExcercises, exLoading, exError] =
    useCollectionData(excerciseQuery);

  async function deleteExHandler(event) {
    console.log(event.target.id);
    await deleteDoc(doc(db, path, event.target.id));
  }

  return (
    <>
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
