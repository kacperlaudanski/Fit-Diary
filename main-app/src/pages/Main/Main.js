import { useState, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../context/auth-context";
import Navbar from "../../layouts/Navbar/Navbar";
import TrainingList from "../../layouts/Card/TrainingList";
import TrainingForm from "../../layouts/Modals/ModalTrainingForm";
import ExcerciseForm from "../../layouts/Modals/ModalExcerciseForm";
import MainFooter from "../../layouts/Footers/MainFooter";
import ExerciseReducer from "./exercise-reducer";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";
import styles from "./styles/main.module.css";
import navStyles from "../../layouts/Navbar/styles/navbar.module.css";
import MainNavbar from "../../layouts/Navbar/MainNavbar";
import AddTrainingBtn from "../../components/Buttons/AddTrainingBtn";
import SearchBar from "../../components/SearchBar/SearchBar";

const DEFAULT_EXCERCISE = {
  excerciseId: null,
  name: "",
  series: null,
  reps: null,
  loading: null,
  volume: null,
};

const Main = () => {
  const [trainingDate, updateDate] = useState("");
  const [trainingName, updateTrainingName] = useState("");
  const [isTrainingFormSelected, setTrainingForm] = useState(false);

  const [state, dispatch] = useReducer(ExerciseReducer, DEFAULT_EXCERCISE);
  const [isExcerciseFormSelected, setExcerciseForm] = useState(false);

  const [currentTraining, setCurrentTraining] = useState("");
  const [isUserEditing, setEditState] = useState(false);
  const [currentEx, setCurrentEx] = useState("");

  const [searchQuery, setQuery] = useState("");

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const uuid = uuidv4();

  //TRAINING HANDLER

  const training = {
    trainingId: uuid,
    date: trainingDate,
    name: trainingName,
  };

  const handleDateChange = (event) => {
    updateDate(event.target.value);
  };

  const handleNameChange = (event) => {
    updateTrainingName(event.target.value);
  };

  const trainingAddFormHandler = () => {
    setEditState(false);
    setTrainingForm(true);
  };

  const addTrainingHandler = async () => {
    try {
      const docRef = doc(
        db,
        `users/${currentUser.uid}/Trainings`,
        training.trainingId
      );
      await setDoc(docRef, training);
      setTrainingForm(false);
    } catch {
      navigate("/error");
    }
  };

  function cancelTrainingHandler() {
    setTrainingForm(false);
  }

  //EXERCISE HANDLER

  const excercise = {
    excerciseId: uuid,
    name: state.name,
    series: state.series,
    reps: state.reps,
    loading: state.loading,
    volume: Math.round(state.series * state.reps * state.loading),
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

  const addExcerciseHandler = async () => {
    try {
      const docRef = await doc(
        db,
        `users/${currentUser.uid}/Trainings/${currentTraining}/Excercises`,
        excercise.excerciseId
      );
      await setDoc(docRef, excercise);
      setExcerciseForm(false);
    } catch {
      navigate("/error");
    }
  };

  function cancelExcerciseHandler() {
    setExcerciseForm(false);
  }

  //EDITING TRAINING

  async function editTraining() {
    try {
      const docRef = await doc(
        db,
        `users/${currentUser.uid}/Trainings`,
        currentTraining
      );
      const update = await updateDoc(docRef, {
        ...training,
        trainingId: currentTraining,
      });
      setTrainingForm(false);
    } catch (err) {
      console.log(err);
    }
  }

  //EDITING EXERCISE

  async function editEx() {
    try {
      const docRef = await doc(
        db,
        `users/${currentUser.uid}/Trainings/${currentTraining}/Excercises`,
        currentEx
      );
      const update = await updateDoc(docRef, {
        ...excercise,
        excerciseId: currentEx,
      });
      setExcerciseForm(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className={styles.main_container}>
      <Navbar elementsClass={navStyles.main_navbar}>
        <MainNavbar />
      </Navbar>
      {isTrainingFormSelected && (
        <TrainingForm
          handleDateChange={handleDateChange}
          handleNameChange={handleNameChange}
          addTrainingHandler={isUserEditing ? editTraining : addTrainingHandler}
          cancelHandler={cancelTrainingHandler}
          title={isUserEditing ? "Edit Training" : "Add New Training"}
          action_btn={isUserEditing ? "Edit Training" : "Create New Training"}
        />
      )}
      {isExcerciseFormSelected && (
        <ExcerciseForm
          onClick={isUserEditing ? editEx : addExcerciseHandler}
          onExcerciseChange={excerciseHandler}
          onSeriesChange={seriesHandler}
          onRepsChange={repsHandler}
          onLoadingChange={loadingHandler}
          cancelHandler={cancelExcerciseHandler}
          title={isUserEditing ? "Edit Exercise" : "Add New Exercise"}
          action_btn={isUserEditing ? "Edit Exercise" : "Add Exercise"}
        />
      )}
      <div className={styles.main_search_container}>
        <AddTrainingBtn trainingAddFormHandler={trainingAddFormHandler} />
        <SearchBar
          query={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <TrainingList
        searchQuery={searchQuery}
        setEditState={setEditState}
        setTrainingForm={setTrainingForm}
        setCurrentTraining={setCurrentTraining}
        setExcerciseForm={setExcerciseForm}
        setCurrentEx={setCurrentEx}
      />
      <MainFooter />
    </main>
  )
}

export default Main;