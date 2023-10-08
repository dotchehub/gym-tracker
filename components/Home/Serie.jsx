import {
  View,
  Text,
  StyleSheet,
  TextInput,
  serieNumber,
  Keyboard,
  TouchableWithoutFeedback,
  InputAccessoryView,
  Button,TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view";
import { useExercice } from "./ExerciceContext";
import { useEffect } from "react";

const Serie = ({ workoutId,exerciceName, serieNumber, weight, rep }) => {
  const { workoutExercices, setWorkoutExercice } = useExercice();
 
  
  const updateWeight = (newWeight) => {
    // Créez une copie profonde de l'état actuel.
  const updatedWorkoutExercices = [...workoutExercices];

  // Trouvez l'exercice avec le workoutId spécifié.
  const targetExercise = updatedWorkoutExercices.find((exercise) => exercise.workoutId === workoutId);

  if (targetExercise) {
    // Trouvez l'index de l'exercice dans le tableau.
    const exerciseIndex = updatedWorkoutExercices.indexOf(targetExercise);

    // Créez une copie profonde de l'exercice cible.
    const updatedExercise = { ...targetExercise };

    // Trouvez l'exercice dans la liste d'exercices de l'exercice cible.
    const targetExercice = updatedExercise.exercices.find((ex) => ex.exerciceName === exerciceName);

    if (targetExercice) {
      // Trouvez l'index de l'exercice dans la liste d'exercices.
      const exIndex = updatedExercise.exercices.indexOf(targetExercice);

      // Créez une copie profonde de l'exercice de la série cible.
      const updatedExercice = { ...targetExercice };

      // Trouvez la série avec le numéro spécifié.
      const targetSerieIndex = updatedExercice.series.findIndex((serie) => serie.serieNumber === serieNumber);

      if (targetSerieIndex !== -1) {
        // Mettez à jour la weight de la série spécifiée avec la nouvelle valeur.
        updatedExercice.series[targetSerieIndex].weight = newWeight;

        // Remplacez l'exercice de la série cible dans l'exercice cible.
        updatedExercise.exercices[exIndex] = updatedExercice;

        // Remplacez l'exercice cible dans la copie de l'état avec l'exercice mis à jour.
        updatedWorkoutExercices[exerciseIndex] = updatedExercise;

        // Mettez à jour le state avec la nouvelle valeur.
        setWorkoutExercice(updatedWorkoutExercices);
      }
    }
  }
  };

  const updateRep = (newRep) => {
      // Créez une copie profonde de l'état actuel.
  const updatedWorkoutExercices = [...workoutExercices];

  // Trouvez l'exercice avec le workoutId spécifié.
  const targetExercise = updatedWorkoutExercices.find((exercise) => exercise.workoutId === workoutId);

  if (targetExercise) {
    // Trouvez l'index de l'exercice dans le tableau.
    const exerciseIndex = updatedWorkoutExercices.indexOf(targetExercise);

    // Créez une copie profonde de l'exercice cible.
    const updatedExercise = { ...targetExercise };

    // Trouvez l'exercice dans la liste d'exercices de l'exercice cible.
    const targetExercice = updatedExercise.exercices.find((ex) => ex.exerciceName === exerciceName);

    if (targetExercice) {
      // Trouvez l'index de l'exercice dans la liste d'exercices.
      const exIndex = updatedExercise.exercices.indexOf(targetExercice);

      // Créez une copie profonde de l'exercice de la série cible.
      const updatedExercice = { ...targetExercice };

      // Trouvez la série avec le numéro spécifié.
      const targetSerieIndex = updatedExercice.series.findIndex((serie) => serie.serieNumber === serieNumber);

      if (targetSerieIndex !== -1) {
        // Mettez à jour la weight de la série spécifiée avec la nouvelle valeur.
        updatedExercice.series[targetSerieIndex].rep = newRep;

        // Remplacez l'exercice de la série cible dans l'exercice cible.
        updatedExercise.exercices[exIndex] = updatedExercice;

        // Remplacez l'exercice cible dans la copie de l'état avec l'exercice mis à jour.
        updatedWorkoutExercices[exerciseIndex] = updatedExercise;

        // Mettez à jour le state avec la nouvelle valeur.
        setWorkoutExercice(updatedWorkoutExercices);
      }
    }
  }
  };

  return (
      <View style={styles.container}>
        <View style={styles.cardInfo}>
          <View
            style={[
              styles.serieNumber,
              { borderColor: weight && rep ? "black" : "#A6A6A6" },
            ]}
          >
            <Text style={{ color: weight && rep ? "black" : "#A6A6A6" }}>
              {serieNumber}
            </Text>
          </View>
            
          <View style={styles.weight}>
            <Text style={{ color: "#A6A6A6", fontSize: 10 }}>+Kg</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder={"0"}
              value={weight?weight:""}
              onChangeText={(text) => updateWeight(text)}
              autoFocus={true}
            />
          </View>
        
          <View style={styles.numberOfRep}>
            <Text style={{ color: "#A6A6A6", fontSize: 10 }}>Répét.</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder={"0"}
              value={rep?rep:""}
              onChangeText={(text) => updateRep(text)}
              
            />
          </View>
         
        </View>
        <View>
          <Ionicons
            name="ellipsis-horizontal-sharp"
            style={{ color: "#A6A6A6" }}
            size={20}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  serieNumber: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
  },
  weight: {
    color: "#A6A6A6",
    height: 50,
    width: 50,
    justifyContent: "center",
    marginLeft: 10,
  },
  numberOfRep: {
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  cardInfo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Serie;
