import { View,Text,TouchableOpacity } from "react-native"
import TrainingTabNavigator from "./TrainingTabNavigator"
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header"

const Workout = ({navigation})=>{
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header show={true} title='Entraînements' right={<Ionicons name="add-sharp" size={30} onPress={()=>navigation.navigate("AddWorkout")}/>}/>
            <TrainingTabNavigator/>    
        </View>
    )
}

export default Workout;