import React, { createContext, useContext, useState } from "react";

// Créez un contexte
const ExerciceContext = createContext();

// Créez un fournisseur (provider) pour le contexte
export const ExerciceProvider = ({ children }) => {
  const [workoutInfo, setWorkoutInfo] = useState([]);

  const [workoutExercices, setWorkoutExercice] = useState([]);

  const deleteWorkout = (workoutId) =>{
    const list = workoutInfo.filter((item)=> item.id!==workoutId)
    setWorkoutInfo(list);
    const exer = workoutExercices.filter((item)=>item.workoutId!==workoutId)
    setWorkoutExercice(exer)
  }

  return (
    <ExerciceContext.Provider
      value={{
        workoutInfo,
        setWorkoutInfo,
        workoutExercices,
        setWorkoutExercice,
        deleteWorkout
      }}
    >
      {children}
    </ExerciceContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useExercice = () => {
  const context = useContext(ExerciceContext);
  if (!context) {
    throw new Error("useExercice must be used within an ExerciceProvider");
  }
  return context;
};
