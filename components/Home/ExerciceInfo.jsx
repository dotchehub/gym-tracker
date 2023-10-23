import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Button,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header";

const ExerciceInfo = ({  navigation,route }) => {
  const exercice = route.params.exercice
  return (
    
    <View
      style={styles.modalView}

    >
      <Header
        show={true}
        title={exercice.name}
        left={
          <Ionicons
            onPress={()=>navigation.goBack()}
            name="close"
            size={30}
            color="black"
          />
        }
      />

      <ScrollView style={{ flex: 1,padding:20}}>
        <View style={styles.mouvement}>
          <Image style={styles.gif} source={{ uri: exercice.gifUrl }} />
        </View>
        <Text style={styles.instructions}>INSTRUCTIONS</Text>

        <View style={{marginBottom:'50%'}}>
        
        {
          exercice.instructions?
          exercice.instructions.map((item,index)=>{
            return(
              <View key={index} style={{ marginTop: 20 }}>
              <Text>
                 {index+1}. {item}
              </Text>
            </View>
            )
            
          })
          :""
        }
        </View>
         
      </ScrollView>
      <View style={styles.addView}>
        <Pressable onPress={() => navigation.navigate({name:"AddExercice", params:{exerciceName:exercice.name},merge:true})} style={styles.pressable}>
          <Text style={styles.pressableText}>AJOUTER</Text>
        </Pressable>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mouvement: {
    borderWidth: 0.3,
    borderColor: "#A6A6A6",
    borderRadius: 20,
    padding: 20,
  },
  gif: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  modalView: {
    backgroundColor: "white",
    flex: 1,
  },
  clockButton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  instructions: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
  },
  pressable: {
    borderRadius: 50,
    width: "80%",
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  addView: {
    position: "absolute",

    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default ExerciceInfo;
