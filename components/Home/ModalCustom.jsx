import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Button,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header";

const ModalCustom = ({ toggleModal, isModalVisible }) => {
  const [seconds, setSeconds] = useState(0);

  const [timer, setTimer] = useState({
    timerRunning: false,
    timerValue: 0,
    timerInterval: null,
  });

  const startTimer = () => {
    if (!timer.timerRunning) {
      setTimer((prev) => ({
        ...prev,
        timerRunning: true,
        timerInterval: setInterval(() => {
          setTimer((prev) => ({
            ...prev,
            timerValue: prev.timerValue + 1,
          }));
        }, 1000),
      }));
    }
  };

  const pauseTimer = () => {
    if (timer.timerRunning) {
      clearInterval(timer.timerInterval);
      setTimer((prev) => ({
        ...prev,
        timerRunning: false,
      }));
    }
  };

  const resetTimer = () => {
    clearInterval(timer.timerInterval);
    setTimer((prev) => ({
      timerRunning: false,
      timerValue: 0,
      timerInterval: null,
    }));
  };

  return (
      <Modal
        style={styles.modalView}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
      >
        <View style={styles.close}></View>
        <Header show={true} title="Temps de repos" />

        <View style={{ flex: 1, alignItems: "center",justifyContent:'center' }}>
          <View style={{flex:1,width:'80%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize: 100 }}>
              {parseInt(timer.timerValue / 60)}:
              {timer.timerValue % 60 < 10 ? "0" : ""}
              {timer.timerValue % 60}{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center',
              flex: 1,
              width: "80%",
            }}
          >
            <View style={[styles.clockButtonBorder, styles.cancelButtonBorder]}>
              <Pressable
                style={[styles.clockButton, styles.cancelButton]}
                onPress={() => resetTimer()}
              >
                <Text style={{ color: "white" }}>Effacer</Text>
              </Pressable>
            </View>
            <View style={[styles.clockButtonBorder,timer.timerRunning ? {backgroundColor:'#FF4B4B'} : styles.startButtonBorder]}>
              <Pressable
                style={[styles.clockButton, timer.timerRunning ? {backgroundColor:'#FF4B4B'} :styles.startButton]}
                onPress={() => timer.timerRunning ? pauseTimer():startTimer()}
              >
                <Text style={{ color: "white" }}>{timer.timerRunning? "Arrêter" : "Démarrer" }</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    flex: 1,
    margin: 0,
    marginTop:400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  clockButton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: "White",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A6A6A6",
  },
  clockButtonBorder: {
    height: 85,
    width: 85,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonBorder: {
    backgroundColor: "black",
  },
  cancelButtonBorder: {
    backgroundColor: "#A6A6A6",
  },
  startButton: {
    backgroundColor: "black",
  },
  cancelButton: {
    backgroundColor: "#A6A6A6",
  },
  close: {
    borderRadius: 20,
    backgroundColor: "#BFBFBF",
    width: 40,
    height: 4,
    marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",
  },
});
export default ModalCustom;
