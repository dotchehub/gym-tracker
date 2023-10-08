import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

import Menu from '../Menu/Menu';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
            name="Login" 
            component={Login}
            options={{
                title: "Créer un compte",
                headerShown: false,
            }} 
        />
        <Stack.Screen
            name="Home" 
            component={Menu}
            options={{
                title: "Créer un compte",
                headerShown: false,
            }} 
        />

    </Stack.Navigator>
  );
}

export default LoginStack;