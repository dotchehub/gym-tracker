import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "@react-native-material/core";
import { Swipeable } from "react-native-gesture-handler";
import { useExercice } from "./ExerciceContext";


const TrainingCard = ({ training, move, workoutId }) => {
  const { workoutInfo,setWorkoutInfo,deleteWorkout } = useExercice()
  
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const swipe = () => {
    return (
      <View style={styles.swipe}>
        <TouchableOpacity style={styles.swipeButton} onPress={() => deleteWorkout(workoutId)}>
          <Text style={styles.swipeText}>SUPPRIMER</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={swipe}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => move(workoutId)}
      >
        <View>
          <Image
            style={styles.image}
            source={require("../../images/img1.jpeg")}
          ></Image>
        </View>
        <View style={styles.trainingInfo}>
          <Text style={styles.trainingTitle}>{training.name}</Text>
          <Text style={styles.trainingDate}>
            {training.date.toLocaleDateString("fr-FR", options)}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 200,
  },
  container: {
    flexDirection: "row",
    height: 120,
    padding: 20,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
  },
  trainingInfo: {
    justifyContent: "center",
    marginLeft: 20,
  },
  trainingTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  trainingDate: {
    color: "#A6A6A6",
  },
  swipe: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 90,
  },
  swipeText: {
    color: "white",
  },
  swipeButton :{
    flex:1,
    justifyContent:'center'
  }
});

export default TrainingCard;
