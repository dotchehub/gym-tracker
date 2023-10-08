import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Divider } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons";
const Header = ({ show,left,right, title,}) => {
  return (
    <SafeAreaView>
      {
        show && (
          <View style={styles.headerContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {
              left
            }
          </View>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.HeaderTitle}>{title}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
          >
             {
              right
             }
            
              
          </View>
        </View>
        )
      }
     
      <Divider leadingInset={0} trailingInset={0} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    height: 50,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  HeaderTitle: {
    fontWeight: "600",
    fontSize: 17,
  },
});

export default Header;
