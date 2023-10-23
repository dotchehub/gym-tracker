import { View,Text,StyleSheet,TextInput } from "react-native"

const LoginInput = ({name,value,setValue}) =>{
    return(
        <View>
            <TextInput
             style={styles.input}
             placeholder={name}
             value={value}
             onChangeText={text =>setValue(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold'
    },
    input: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth:1,
        marginBottom:20
      },
});

export default LoginInput;