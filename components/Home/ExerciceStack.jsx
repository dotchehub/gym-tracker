import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

import ListExercice from "./ListExercice";
import GroupExercice from "./GroupExercice";
import ExerciceInfo from "./ExerciceInfo";


const Stack = createStackNavigator();

const ExerciceStack = ({ navigation }) =>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "black",
        initialRouteName:"GroupExercice",
        headerStyle: { backgroundColor: "#efefef" },
      }}
    >
        <Stack.Screen
        name="GroupExercice"
        component={GroupExercice}
        options={{
          headerShown:false,
          
        }}
      />
      <Stack.Screen
        name="ExerciceInfo"
        component={ExerciceInfo}
        options={{
          headerShown:false,
         
        }}
      />
       <Stack.Screen
        name="ListExercice"
        component={ListExercice}
        options={{
          headerShown:false,
          
        }}
      />
      
    </Stack.Navigator>
  );
}

export default ExerciceStack;
