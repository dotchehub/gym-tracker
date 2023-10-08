import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkoutHistory from './WorkoutHistory';
import Performance from './Performances';


const Tab = createMaterialTopTabNavigator();

const TrainingTabNavigator = ()=>{
    return (
        <Tab.Navigator
        initialRouteName="WorkoutHistory"
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle:{backgroundColor:'black'},
          tabBarLabelStyle: { fontSize: 10 },
          tabBarStyle: { backgroundColor: 'white',width:'80%' },
        }}
      >
        <Tab.Screen
          name="WorkoutHistory"
          component={WorkoutHistory}
          options={{ tabBarLabel: 'History' }}
        />
        <Tab.Screen
          name="Performance"
          component={Performance}
          options={{ tabBarLabel: 'Performances' }}
        />
      </Tab.Navigator>
    )

}

export default TrainingTabNavigator;