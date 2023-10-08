import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "@react-native-material/core";
import Serie from "./Serie";
import { useState } from "react";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { useExercice } from "./ExerciceContext";

const ExerciceCard = ({ exerciceName, workoutId }) => {
  const { workoutExercices, setWorkoutExercice} = useExercice();

  const workout = workoutExercices.find((item) => item.workoutId === workoutId);
 
  const series = workout ? workout.exercices.find((item)=> item.exerciceName==exerciceName).series : [];

  

  const onAddingRep = () => {
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

      // Créez une nouvelle série avec les valeurs souhaitées.
      const newSerie = { serieNumber: updatedExercice.series.length + 1, weight: 0, rep: 0 };

      // Ajoutez la nouvelle série à l'exercice de la série cible.
      updatedExercice.series.push(newSerie);

      // Remplacez l'exercice de la série cible dans l'exercice cible.
      updatedExercise.exercices[exIndex] = updatedExercice;

      // Remplacez l'exercice cible dans la copie de l'état avec l'exercice mis à jour.
      updatedWorkoutExercices[exerciseIndex] = updatedExercise;

      // Mettez à jour le state avec la nouvelle valeur.
      setWorkoutExercice(updatedWorkoutExercices);
    }
  }
  };

  //const [data, setData] = useState([{id:1, weight: 0, rep: 0 }]);
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {exerciceName}
        </Text>
        <Ionicons
          name="ellipsis-horizontal-sharp"
          size={20}
          style={{ color: "#A6A6A6" }}
        />
      </View>
      <Divider leadingInset={15} trailingInset={0} />
      <KeyboardAwareFlatList
        ItemSeparatorComponent={() => (
          <Divider leadingInset={15} trailingInset={0} />
        )}
        data={series}
        renderItem={({ item }) => (
          <Serie
            workoutId={workoutId}
            exerciceName={exerciceName}
            serieNumber={item.serieNumber}
            weight={item.weight}
            rep={item.rep}
          />
        )}
        keyExtractor={(item) => item.serieNumber}
        enableResetScrollToCoords={true}
        
      />
      <Divider leadingInset={15} trailingInset={0} />
      <View style={styles.addNewSerie}>
        <Button title="Ajouter une série" onPress={onAddingRep} />
        <Ionicons name="reload-sharp" size={20} style={{ color: "#A6A6A6" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    alignItems: "center",
  },
  addNewSerie: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    alignItems: "center",
  },
});

export default ExerciceCard;
