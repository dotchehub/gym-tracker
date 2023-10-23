import HomeStack from "./HomeStack"
import LoginStack from "../Login/LoginStack"
import { useAuth } from "./AuthContext"
import { NavigationContainer } from '@react-navigation/native';
import { View,ActivityIndicator } from "react-native";


const AppNav =  () =>{
    const {isLoading,userToken} = useAuth();
    
    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            {<HomeStack/>}
        </NavigationContainer>
    )
}

export default AppNav;