import { View, Text,StyleSheet,TextInput,Pressable } from "react-native";
import Header from "../Home/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginInput from "./LoginInput";

import { useAuth } from "../Home/AuthContext";
import { useState } from "react";

const SingInScreen = ({ navigation }) => {
    const {login} = useAuth();
    const [firstName,setFirstName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  return (
    <View style={{flex:1}}>
      <Header
        show={true}
        title="S'inscrire"
        left={
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={30}
            color="black"
          />
        }
      />
      <View style={styles.container}>
      <View>
        <Text style={{fontWeight:'bold',fontSize:30,marginTop:10,}}>SE CONNECTER</Text>
      </View>
      <View >
       <LoginInput name={"EMAIL:"} value={email} setValue={setEmail} />
       <LoginInput name={"MOT DE PASSE:"} value={password} setValue={setPassword} />

        <Pressable style={styles.createAccountButton} onPress={()=>login(email,password)} >
        <Text style={styles.pressableText}>SE CONNECTER</Text>
        </Pressable>

      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginRight:20
    },
    createAccountButton:{
        marginTop:20,
        borderRadius:30,
        backgroundColor:'black',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    pressableText:{
        
        color:"white",
        fontWeight:'bold'
    }
});
  
export default SingInScreen;
