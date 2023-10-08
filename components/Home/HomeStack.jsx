import { createStackNavigator } from "@react-navigation/stack";
import AddWorkout from "./AddWorkout";
import AddExercice from "./AddExercice";
import Menu from "../Menu/Menu";
import ExerciceStack from "./ExerciceStack";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#efefef" },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
        <Stack.Screen
          name="AddExercice"
          component={AddExercice}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ExerciceStack"
          component={ExerciceStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
