import React, { useState, useContext, useReducer, useCallback } from "react";
import styles from "./styles/main.module.css";
import Navbar from "../Features/Navbar/Navbar";
import TrainingList from "./Card/TrainingList";
import TrainingCard from "./Card/TrainingCard";
import { AuthContext } from "../../context/auth-context";
import TrainingForm from "../Features/Modal/ModalTrainingForm";
import ExcerciseForm from "../Features/Modal/ModalExcerciseForm";
import { v4 as uuidv4 } from "uuid";
import UserAvatar from "../../images/user.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Features/Footer/Footer";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../context/firebase-context";
import ExcerciseList from "./Card/ExcerciseList";
import ButtonSearch from "./Button-Search-Bar";
import EmptyTraining from "../Features/EmptyBox/EmptyTraining";
import Loader from "../Features/Loader/Loader";
import Pagination from "../Features/Pagination/Pagination";

const ExcerciseReducer = (state, action) => {
  switch (action.type) {
    case "EXCERCISE":
      return { ...state, name: action.payload };
    case "SERIES":
      return { ...state, series: action.payload };
    case "REPS":
      return { ...state, reps: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const Main = () => {
  const [trainingDate, updateDate] = useState("");
  const [trainingName, updateTrainingName] = useState("");
  const [isTrainingFormSelected, setTrainingForm] = useState(false);
  const [isExcerciseFormSelected, setExcerciseForm] = useState(false);
  const [currentTraining, setCurrentTraining] = useState("");
  const [isUserEditing, setEditState] = useState(false);
  const [currentEx, setCurrentEx] = useState("");

  const [searchQuery, setQuery] = useState("");

  const DEFAULT_EXCERCISE = {
    excerciseId: null,
    name: "",
    series: null,
    reps: null,
    loading: null,
    volume: null,
  };

  const [state, dispatch] = useReducer(ExcerciseReducer, DEFAULT_EXCERCISE);

  const { currentUser } = useContext(AuthContext);

  const uuid = uuidv4();

  const training = {
    trainingId: uuid,
    date: trainingDate,
    name: trainingName,
  };

  const excercise = {
    excerciseId: uuid,
    name: state.name,
    series: state.series,
    reps: state.reps,
    loading: state.loading,
    volume: Math.round(state.series * state.reps * state.loading),
  };

  const trainingsQuery = useCallback(
    collection(db, `users/${currentUser.uid}/Trainings`),
    [collection]
  );
  const [loadedTrainings, trainingLoading, trainingError] =
    useCollectionData(trainingsQuery);

  const filteredTrainings = loadedTrainings?.filter((training) => {
    return training.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDateChange = (event) => {
    updateDate(event.target.value);
  };

  const handleNameChange = (event) => {
    updateTrainingName(event.target.value);
  };

  const excerciseHandler = (event) => {
    dispatch({ type: "EXCERCISE", payload: event.target.value });
  };

  const seriesHandler = (event) => {
    dispatch({ type: "SERIES", payload: event.target.value });
  };

  const repsHandler = (event) => {
    dispatch({ type: "REPS", payload: event.target.value });
  };

  const loadingHandler = (event) => {
    dispatch({ type: "LOADING", payload: event.target.value });
  };

  const modalExcerciseFormHandler = async () => {
    const docRef = await doc(
      db,
      `users/${currentUser.uid}/Trainings/${currentTraining}/Excercises`,
      excercise.excerciseId
    );
    await setDoc(docRef, excercise);
    setExcerciseForm(false);
  };

  const addTrainingHandler = async () => {
    const docRef = doc(
      db,
      `users/${currentUser.uid}/Trainings`,
      training.trainingId
    );
    await setDoc(docRef, training);
    setTrainingForm(false);
  };

  const trainingAddFormHandler = () => {
    setTrainingForm(true);
  };

  const excerciseAddFormHandler = (event) => {
    setEditState(false);
    setCurrentTraining(event.target.id);
    setExcerciseForm(true);
  };

  const auth = getAuth();
  const navigate = useNavigate();

  function logoutHandler() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function cancelTrainingHandler() {
    setTrainingForm(false);
  }

  function cancelExcerciseHandler() {
    setExcerciseForm(false);
  }

  async function editTrainingHandler(event) {
    console.log(event.target.id);
    setCurrentTraining(event.target.id);
  }

  async function deleteTrainingHandler(event) {
    console.log(event.target.id);
    await deleteDoc(
      doc(db, `users/${currentUser.uid}/Trainings`, event.target.id)
    );
  }

  /*async function editEx() {
    await updateDoc(
      doc(
        db,
        `users/${currentUser.uid}/Trainings/${currentTraining}/Excercises/${currentEx}`,
        { excercise }
      )
    );
    setExcerciseForm(false);
  }*/

  //PAGINATION LOGIC

  const [currentPage, setCurrentPage] = useState(1);
  const trainingsPerPage = 5; 
  //const [trainingsPerPage, setTraningsPerPage] = useState(5);

  const lastTrainingIndex = trainingsPerPage * currentPage;
  const firstTrainingIndex = lastTrainingIndex - trainingsPerPage;

  const selectedTrainings = filteredTrainings?.slice(
    firstTrainingIndex,
    lastTrainingIndex
  );

  return (
    <main className={styles.main_container}>
      <Navbar elementsClass={styles.main_navbar}>
        <img
          src={UserAvatar}
          alt="user-avatar"
          className={styles.navbar_user_avatar}
        ></img>
        <button
          className={styles.logout_button}
          type="button"
          onClick={logoutHandler}
        >
          Log out
        </button>
      </Navbar>
      {isTrainingFormSelected && (
        <TrainingForm
          handleDateChange={handleDateChange}
          handleNameChange={handleNameChange}
          addTrainingHandler={addTrainingHandler}
          cancelHandler={cancelTrainingHandler}
        />
      )}
      {isExcerciseFormSelected && (
        <ExcerciseForm
          onClick={/*isUserEditing ? editEx :*/ modalExcerciseFormHandler}
          onExcerciseChange={excerciseHandler}
          onSeriesChange={seriesHandler}
          onRepsChange={repsHandler}
          onLoadingChange={loadingHandler}
          cancelHandler={cancelExcerciseHandler}
        />
      )}
      <ButtonSearch
        trainingAddFormHandler={trainingAddFormHandler}
        query={searchQuery}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TrainingList>
        {filteredTrainings?.length === 0 && <EmptyTraining />}
        {trainingLoading && <Loader />}
        {selectedTrainings?.map((training, index) => {
          return (
            <TrainingCard
              key={training.trainingId}
              date={training.date}
              title={training.name}
              onClick={excerciseAddFormHandler}
              editBtnId={training.trainingId}
              deleteBtnId={training.trainingId}
              editHandler={editTrainingHandler}
              deleteHandler={deleteTrainingHandler}
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
      </TrainingList>
      <Pagination 
         totalLength = {filteredTrainings?.length}
         trainingsPerPage = {trainingsPerPage}
         setCurrentPage = {setCurrentPage}
         currentPage = {currentPage}
      /> 
      <Footer />
    </main>
  );
};

export default Main;
