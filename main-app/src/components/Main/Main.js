import React, { useRef, useState, useEffect } from "react";
import "./main.scss";
import Navbar from "../Features/Navbar/Navbar";
import Form from "../Features/Form/FormWrapper";
import Input from "../Features/Input/Input";
import TrainingList from "./TrainingList";
import TrainingCard from "./TrainingCard";

const Main = () => {
  const [trainingDate, updateDate] = useState("");
  const [trainingName, updateTrainingName] = useState("");
  const [trainings, updateTrainings] = useState([]);

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
    const response = await fetch(
      "https://fitdiary-ffe99-default-rtdb.europe-west1.firebasedatabase.app/trainings.json",
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
  }

  async function fetchTrainings() {
    try {
      const response = await fetch(
        "https://fitdiary-ffe99-default-rtdb.europe-west1.firebasedatabase.app/trainings.json"
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
    fetchTrainings()
  }, [])

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
      <TrainingList onClick = {fetchTrainings}>
        {trainings.map((training, id) => {
            return(
                <TrainingCard 
                    key = {id}
                    date = {training.trainingDate}
                    title = {training.trainingName}
                />
            )
        })}
      </TrainingList>
    </main>
  );
};

export default Main;
