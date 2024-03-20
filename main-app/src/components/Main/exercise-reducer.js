const ExerciseReducer = (state, action) => {
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

  export default ExerciseReducer; 