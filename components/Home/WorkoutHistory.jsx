import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Divider } from "@react-native-material/core";
import TrainingCard from "./TrainingCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalCustom from "./ModalCustom";
import ExerciceStack from "./ExerciceStack";
import Header from "./Header";
import { useExercice } from "./ExerciceContext";

const screenDimensions = Dimensions.get('window');

const HistoryHeader = ({ numberOfWorkout }) => {
  return (
    <View style={styles.historyHeader}>
      <View style={styles.workoutSum}>
        <View style={styles.numberOfWorkoutView}>
          <Text style={styles.numberOfWorkout}>{numberOfWorkout}</Text>
          <Text style={styles.numberOfWorkoutText}>Total des activités</Text>
        </View>
      </View>
      
    </View>
  );
};

const EmptyComponent = () => {
  return (
    <View style={styles.emptyComponent}>
      <Text style={{color:'#A6A6A6'}}>VOUS N'AVEZ AUCUN ENTRAINEMENT</Text>
    </View>
  );
};

const WorkoutHistory = ({ navigation }) => {
  const onPressTraining = (workoutId) => {
    navigation.navigate("AddExercice", { workoutId: workoutId });
  };
  console.log(screenDimensions.height)
  const { workoutInfo } = useExercice();

  return (
    <FlatList
      ListHeaderComponent={
        <HistoryHeader numberOfWorkout={workoutInfo.length} />
      }
      style={{backgroundColor:'white'}}
      data={workoutInfo}
      renderItem={({ item }) => (
        <TrainingCard
          training={item}
          move={onPressTraining}
          workoutId={item.id}
        />
      )}
      ListEmptyComponent={<EmptyComponent />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  historyHeader: {
    height:200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth:0.2,
    borderColor: 'rgba(170, 170, 170, 0.5)',
  
  },
  emptyComponent: {
    height:400,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutSum: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberOfWorkoutView: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberOfWorkout: {
    fontSize: 60,
    fontWeight: "900",
  },
  numberOfWorkoutText: {
    color: "#A6A6A6",
  },
});

export default WorkoutHistory;
