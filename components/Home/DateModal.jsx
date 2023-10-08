import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";
import { Divider } from "@react-native-material/core";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateModal = ({ show, setShow, date, onChange }) => {
  return (
    <Modal isVisible={show} style={styles.modalView}>
      <View style={styles.dateTimePicker}>
        <View style={styles.dateChoise}>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={styles.confirmDate}
          >
            <Text>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={styles.confirmDate}
          >
            <Text>Terminé</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <DateTimePicker
          style={{ height: 300 }}
          testID="dateTimePicker"
          value={date}
          display="spinner"
          mode={"datetime"}
          is24Hour={false}
          onChange={onChange}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  dateTimePicker: {
    position: "absolute",
    backgroundColor: "white",
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 0,
  },
  dateChoise: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#5C5D5D",
  },
});

export default DateModal;
