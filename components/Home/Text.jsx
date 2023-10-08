import React from 'react';
import { View, Text,Dimensions,ScrollView,StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { SwipeListView } from 'react-native-swipe-list-view';

import {Swipeable} from 'react-native-gesture-handler'


//... note: your data array objects MUST contain a key property 
//          or you must pass a keyExtractor to the SwipeListView to ensure proper functionality
//          see: https://reactnative.dev/docs/flatlist#keyextractor


const ItsYourBirthday = () => {
  const a = Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item ${i}` }));

    const leftSwipe = ()=>{
      return(
        <View style={styles.leftSwipe}>
          <Text>Hello Left</Text>
        </View>
      )
    }

  return (
    <View style={{flex:1}}>
    <FlatList
            data={a}
            renderItem={ ({item}) => (
              <Swipeable renderLeftActions={leftSwipe}>
                <View style={styles.item}>
                    <Text>I am {item.text} in a SwipeListView</Text>
                </View>
              </Swipeable>
            )}
            
        />
        </View>
   
  );
};

const styles = StyleSheet.create({
  
  item:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1

  },
  leftSwipe:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
  }
});

export default ItsYourBirthday;