import React from "react";
import { Divider } from "@react-native-material/core";
import { TouchableOpacity, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateModal from "./DateModal";
import TrainingTabNavigator from "./TrainingTabNavigator";
import { useExercice } from "./ExerciceContext";
import uuid from 'react-native-uuid';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from "react-native";
import { useState } from "react";

const AddWorkout = ({ navigation }) => {
  const { workoutInfo, setWorkoutInfo,workoutExercices, setWorkoutExercice } = useExercice();
  const [exerciceName, setExerciceName] = useState("");

  const [workoutName, setWorkoutName] = React.useState("");
  const [note, setNote] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    console.log(selectedDate)
    setDate(selectedDate);
  };

  const onNext = () => {
    const workoutId = uuid.v4();
    console.log(" AFTER ADDING " + workoutId);
    setWorkoutInfo([...workoutInfo, { id: workoutId, name: workoutName,date:date }]);
    
    setWorkoutExercice([
      ...workoutExercices,
      {
        workoutId: workoutId,
        exercices: [],
      },
    ]);

    navigation.navigate("AddExercice", { workoutId: workoutId });

    /*
    setData([
      ...data,
      {
        id: data.length + 1,
        exerciceName: route.params?.exerciceName,
        series: [{ serieNumber: 1, weight: 0, rep: 0 }],
      },
    ]);
*/
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setWorkoutName}
          value={workoutName}
          placeholder="Nom"
        />
        <Divider leadingInset={15} trailingInset={0} />
        <TouchableOpacity
          style={styles.trainingDate}
          onPress={() => setShow(true)}
        >
          <Text>Date</Text>
          <Text style={styles.date}>{date.toLocaleDateString("fr-FR")}</Text>
        </TouchableOpacity>

        <Divider leadingInset={15} trailingInset={0} />
        <TextInput
          style={styles.input}
          onChangeText={setNote}
          value={note}
          placeholder="Notes"
        />
        <Divider leadingInset={15} trailingInset={0} />
      </View>
      <Pressable onPress={() => onNext()} style={styles.pressable}>
        <Text style={styles.pressableText}>Suivant</Text>
      </Pressable>
      <DateModal
        show={show}
        setShow={setShow}
        date={date}
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    backgroundColor: "white",
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  input: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  trainingDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  date:{
    color:'#A6A6A6'
  },
  dateTimePicker: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 10,
  },
  dateChoise: {
    flex: 1,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#5C5D5D",
  },
  confirmDate: {},
  pressable: {
    height: 50,
    marginLeft: 20,
    marginTop: 50,
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddWorkout;
