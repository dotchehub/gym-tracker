import { View,StyleSheet,ImageBackground,Text,Image } from "react-native"
import { useState,useEffect } from "react";
import { Divider } from "@react-native-material/core";
const ExerciceHeader = ({workoutName})=>{
    const [imgUrl,setImgUrl] = useState("../../images/black.png");
    
    return (
        
        <ImageBackground
        style={styles.training}
        source={require("../../images/black.png")}
      >
        <View>
          <Divider
            style={{ height: 5 }}
            color="white"
            leadingInset={0}
            trailingInset={0}
          />
          <View style={{ margin: 10 }}>
            <Text style={{ color: "white", fontSize: 25 }}>
              {workoutName}
            </Text>
          </View>
          <Divider
            style={{ height: 5 }}
            color="white"
            leadingInset={0}
            trailingInset={0}
          />
        </View>
      </ImageBackground>
      
    )
}
const styles = StyleSheet.create({
    training: {
      height: 350,
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      marginBottom:30,
      
    },
  });

export default ExerciceHeader;