import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { Divider } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header";
import ExerciceCard from "./ExerciceCard";
import ExerciceHeader from "./ExerciceHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view";
import { useState, useEffect } from "react";
import ModalCustom from "./ModalCustom";
import { useExercice } from "./ExerciceContext";

const AddExercice = ({ navigation, route }) => {
  const { workoutExercices, setWorkoutExercice, workoutInfo } = useExercice();

  const [isModalVisible, setModalVisible] = useState(false);
  let exercicesFound = workoutExercices.find(
    (item) => item.workoutId === route.params.workoutId
  );
  const exercices = exercicesFound ? exercicesFound.exercices : [];
  const workout = workoutInfo.find(
    (item) => item.id === route.params.workoutId
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (route.params?.exerciceName) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const updatedExercice = workoutExercices.map((item) => {
        if (item.workoutId === route.params.workoutId) {
          return {
            ...item,
            exercices: [
              ...item.exercices,
              {
                exerciceName: route.params?.exerciceName,
                series: [{ serieNumber: 1, weight: 0, rep: 0 }],
              },
            ],
          };
        }
        return item;
      });
      setWorkoutExercice(updatedExercice);
    }
  }, [route.params?.exerciceName]);

  return (
    <View style={styles.container}>
      <Header
        show={true}
        left={
          <Button
            title="Terminer"
            onPress={() => navigation.navigate("Home")}
          />
        }
        right={
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Ionicons
              onPress={() => toggleModal()}
              name="alarm-outline"
              size={30}
              color="black"
              style={{marginRight:15}}
            />

            <Ionicons
              onPress={() => toggleModal()}
              name="camera-outline"
              size={30}
              color="black"
            />
          </View>
        }
        title={workout.date.toLocaleDateString("fr-FR")}
      />

      <KeyboardAwareFlatList
        data={exercices}
        renderItem={({ item }) => (
          <ExerciceCard
            exerciceName={item.exerciceName}
            workoutId={route.params.workoutId}
          />
        )}
        keyExtractor={(item) => item.exerciceName}
        enableResetScrollToCoords={false}
        ListHeaderComponent={<ExerciceHeader workoutName={workout.name}/>}
      />

      <View style={styles.addView}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("ExerciceStack")}
        >
          <Ionicons name="add" color={"white"} size={30} />
        </TouchableOpacity>
      </View>
      <ModalCustom isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  training: {
    height: 300,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  addView: {
    position: "absolute",
    margin: "auto",
    marginLeft: "auto",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    flex: 1,
  },
  addButton: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddExercice;
