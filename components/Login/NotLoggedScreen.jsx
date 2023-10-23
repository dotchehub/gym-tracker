import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,SafeAreaView  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from '../Home/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function Login({ navigation,name,setName }) {
    const {login} = useAuth();
    return (
          <ImageBackground source={require('../../images/img1.jpeg')} resizeMode="cover" style={styles.image}>
            <View style={styles.mainView}>
              <View>
                  <Text style={styles.title}>
                    STREEG
                  </Text>
                  <Text style={{color:'white'}}>
                    Suivez vos performances,,{"\n"}
                    Atteignez vos objectifs!
                  </Text>
              </View>
              <View style={styles.connexionButtons}>
                <TouchableOpacity style={styles.appleConnexion} onPress={()=>navigation.navigate("SingInScreen")} >
                  <Text>
                    Se connecter
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emailConnexion} onPress={()=>navigation.navigate("LoginScreen")} >
                  <Text style={{color:'white'}}>
                    <Ionicons name=""/> S'inscrire
                  </Text>
                </TouchableOpacity>
              </View>  
            </View>
            <StatusBar style="dark" />
          </ImageBackground>    
    
    );
  }
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainView:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'flex-start',
      marginBottom:60,
      paddingLeft:30,
      paddingRight:10,
    },
    image:{
      flex:1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    title:{
      fontSize:30,
      marginBottom:20,
      color:'white',
      fontWeight:'bold'
    },
    appleConnexion:{
      width:300,
      height:50,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:10
    },
    emailConnexion:{
      width:300,
      height:50,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      marginTop:20,
      backgroundColor:'black',
      borderRadius:10
    },
    connexionButtons:{
      flexDirection:'column',
      justifyContent:'space-between',
      marginTop:40,
    }
  });
  