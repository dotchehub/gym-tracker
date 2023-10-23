import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import { useAuth } from "../Home/AuthContext";
const Profil = ({ navigation }) => {
  const {logout} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Logout" onPress={()=>logout()}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default Profil;