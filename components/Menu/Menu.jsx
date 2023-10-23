import * as React from "react";
import { View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profil from "../Profil/Profil";
import Progress from "../Home/Progress";

import WorkoutHistory from "../Home/WorkoutHistory";
import TrainingTabNavigator from "../Home/TrainingTabNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Workout from "../Home/Workout";
import ItsYourBirthday from "../Home/Text";
import AllExercice from "../Home/AllExercice";


const Tab = createBottomTabNavigator();

const Menu = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Entraînements") {
            iconName = "book-outline"
          } else if (route.name === "Settings") {
            iconName = "person-circle-outline" 
          }else if(route.name === "Progress"){
            iconName = "trending-up-sharp"
          }else if(route.name==="Exercices"){
            iconName = "barbell-sharp"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Entraînements"
        component={Workout}
        options={{
          headerShown:false,
        }}
      />
        <Tab.Screen
        name="Exercices"
        component={AllExercice}
        options={{
            
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          headerShown:true
        }}
      />
      <Tab.Screen name="Settings" component={Profil} options={{
            
        }}/>
    </Tab.Navigator>
  );
};

export default Menu;
