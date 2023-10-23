import { createStackNavigator } from '@react-navigation/stack';
import NotLoggedScreen from './NotLoggedScreen';
import LoginScreen from './LoginScreen';
import SingInScreen from './SingInScreen';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="NotLoggedScreen" >
        <Stack.Screen
            name="NotLoggedScreen" 
            component={NotLoggedScreen}
            options={{
                title: "Créer un compte",
                headerShown: false,
            }} 
        />
        <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{
              title:"S'inscrire",
              headerShown: false,
            }}
        />
        <Stack.Screen
            name='SingInScreen'
            component={SingInScreen}
            options={{
              title:"Se connecter",
              headerShown: false,
            }}
        />
    </Stack.Navigator>
  );
}

export default LoginStack;