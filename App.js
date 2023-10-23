import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStack from "./components/Home/HomeStack";
import LoginStack from "./components/Login/LoginStack";
import { NavigationContainer } from "@react-navigation/native";
import { ExerciceProvider } from "./components/Home/ExerciceContext";
import AppNav from "./components/Home/AppNav";
import { AuthProvider } from "./components/Home/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ExerciceProvider>
        <AppNav/>
      </ExerciceProvider>
    </AuthProvider>
  );
}
