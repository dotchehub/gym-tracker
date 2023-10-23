import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
// Créez un contexte
const AuthContext = createContext();

// Créez un fournisseur (provider) pour le contexte
export const AuthProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken,setUserToken] = useState(null);
    const [userInfo,setUserInfo] = useState(null);

    const login = (email,password)=>{
        console.log(email)
        console.log(password)
        setIsLoading(true);
        axios.post(`${BASE_URL}/users/signin`,{
            email:email,
            password:password
        }).then(res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token)

            AsyncStorage.setItem("userToken",userInfo.token);
            AsyncStorage.setItem("userInfo",JSON.stringify(userInfo));

        }).catch(error =>{
            console.log(`Login error ${error}`)
        })
        
        setIsLoading(false);
    }

    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem("userToken");
        AsyncStorage.removeItem("userInfo");
       
        setIsLoading(false);
    }

    const isLoggedIn = async()=>{
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
            setIsLoading(false);
        } catch (error) {
            console.log('IsLogged is error '+error)
        }
        
    }

    const register = (name,email,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/users`,{
            name:name,
            email:email,
            password:password
        }).then(res=>{
            console.log(res.data)
            login(email,password)
        }).catch(error =>{
            console.log(`Register Error ${error}`)
            
        })
        setIsLoading(false);
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        userToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useExercice must be used within an ExerciceProvider");
  }
  return context;
};
