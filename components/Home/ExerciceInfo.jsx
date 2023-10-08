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
} from "react-native";
import Modal from "react-native-modal";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header";

const ExerciceInfo = ({ toggleModal, isModalVisible, exercice }) => {
  return (
    
      <Modal
        style={styles.modalView}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
      >
        <Header
          show={true}
          title={exercice.name}
          left={
            <Ionicons
              onPress={toggleModal}
              name="close"
              size={30}
              color="black"
            />
          }
        />

        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.mouvement}>
            <Image style={styles.gif} source={{ uri: exercice.gifUrl }} />
          </View>
          <Text style={styles.instructions}>INSTRUCTIONS</Text>
          <FlatList
            data={exercice.instructions}
            renderItem={({ item, index }) => (
              <View style={{ marginTop: 20 }}>
                <Text>
                  {index + 1}. {item}
                </Text>
              </View>
            )}
          />
        </View>
        <Pressable onPress={()=>alert("hello")} style={styles.pressable}><Text style={styles.pressableText}>AJOUTER</Text></Pressable>
      </Modal>
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
    margin: 0,
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  pressable:{
    height:50,
    marginLeft:20,
    borderRadius:10,
    marginRight:20,
    backgroundColor:'black',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    
  },
  pressableText:{
    color:'white',
    fontWeight:'bold'
  }
});
export default ExerciceInfo;
