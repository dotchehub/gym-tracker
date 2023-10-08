import { View,Text,ImageBackground,StyleSheet, TouchableOpacity } from "react-native"

const Performance = ()=>{
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <ImageBackground style={styles.backgroung} source={require("../../images/img1.jpeg")}>
                <Text style={styles.title}>TOUJOURS PLUS LOIN</Text>
                <Text style={styles.explaination}>Vous avez reussi, ça se fête ! Entraînez-vous pour obtenir des trophées, des recompenses et des séries</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Trouver un entraînement</Text></TouchableOpacity>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroung:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    title:{
        fontWeight:'900',
        fontSize:30,
        color:'white',
        marginBottom:15
    },
    explaination:{
        color:'white',
        marginBottom:15,
        lineHeight: 20
    },
    button:{
        height:40,
        width:200,
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',

    },
    buttonText:{
        color:'white'
    }
})
export default Performance;