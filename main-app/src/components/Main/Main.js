import React, { useRef, useState, useEffect, useContext } from "react";
import "./main.scss";
import Navbar from "../Features/Navbar/Navbar";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import TrainingList from "./TrainingList";
import TrainingCard from "./TrainingCard";
import { AuthContext } from "../../context/auth-context";

const Main = () => {
  const [trainingDate, updateDate] = useState("");
  const [trainingName, updateTrainingName] = useState("");
  const [trainings, updateTrainings] = useState([]);

  const {currentUser} = useContext(AuthContext); 

  const training = {
    date: trainingDate,
    name: trainingName,
  };

  const handleDateChange = (event) => {
    updateDate(event.target.value);
  };

  const handleNameChange = (event) => {
    updateTrainingName(event.target.value);
  };

  async function addTrainingHandler() {
    try {
      const response = await fetch(
        `https://fitdiary-ffe99-default-rtdb.europe-west1.firebasedatabase.app/${currentUser.uid}.json`,
        {
          method: "POST",
          body: JSON.stringify(training),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      throw new Error(`Error: ${err.message}`);
    }
  }

  async function fetchTrainings() {
    try {
      const response = await fetch(
        `https://fitdiary-ffe99-default-rtdb.europe-west1.firebasedatabase.app/${currentUser.uid}.json`
      );
      const data = await response.json();
      const loadedTrainings = [];

      for (const key in data) {
        loadedTrainings.push({
          id: key,
          trainingDate: data[key].date,
          trainingName: data[key].name,
        });
      }
      updateTrainings(loadedTrainings);
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  useEffect(() => {
    fetchTrainings();
  }, [trainings]);

  return (
    <main className="main-container">
      <Navbar />
      <div className="add-training-container">
        <h2>+ Add new training</h2>
        <Form className="add-training-form">
          <Input
            type="date"
            onChange={handleDateChange}
            inputClass="training-input"
          />
          <Input
            type="text"
            onChange={handleNameChange}
            inputClass="training-input"
            placeholder="Training Title"
          />
          <button
            className="create-training-button"
            type="button"
            onClick={addTrainingHandler}
          >
            Create new training
          </button>
        </Form>
      </div>
      <TrainingList onClick={fetchTrainings}>
        {trainings.map((training, id) => {
          return (
            <TrainingCard
              key={id}
              date={training.trainingDate}
              title={training.trainingName}
            />
          );
        })}
      </TrainingList>
    </main>
  );
};

export default Main;
