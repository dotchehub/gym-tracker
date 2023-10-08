import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Header";
import { SearchBar } from "@rneui/themed";
import ExerciceInfo from "./ExerciceInfo";
import { Divider } from "@react-native-material/core";

const ListExercice = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [exercices, setExercices] = useState([]);
  const [showHeader, setShowHeader] = useState(true);
  const [selectedExercice,setSelectedExercice] = useState({})

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/"+route.params.name, {
        headers: {
            'X-RapidAPI-Key': 'b31ae75f0emsha93d0d4ebe0de9bp1940d6jsndb53ce76cef1',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          },
          params: {limit: '20'},
    })
    .then((response)=>response.json())
      .then((json) => {
        console.log(json)
        setExercices(json);
      })       
    .catch((error) => {
        console.error(error);
      });


  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        show={showHeader}
        title={"Selectionner"}
        left={
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={30}
            color="black"
          />
        }
        right={
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              onPress={() => leftAction()}
              name="add"
              size={30}
              color="black"
            />
          </View>
        }
      />
      <View style={{flex:1}}>
        <SearchBar
          onFocus={() => setShowHeader(false)}
          inputContainerStyle={{ height: 30 }}
          containerStyle={{ backgroundColor: "#efefef" }}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          lightTheme={true}
          platform="ios"
          showCancel={true}
          onCancel={() => setShowHeader(true)}
          value={search}
        />
      {
        exercices.length==0 ?
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator  size="large" color="black" />
        </View> :
          <View>
          <Divider leadingInset={10} trailingInset={0} />
          <FlatList
            data={exercices}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.exerciceItem}
                  onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                      name: "AddExercice",
                      params: { exerciceName: item.name },
                      merge: true,
                    });
                  }}
                >
                  <Text>{item.name}</Text>
                  <Ionicons
                    onPress={()=>{toggleModal(); setSelectedExercice(item)}}
                    name="information-circle-outline"
                    color={"#A6A6A6"}
                    size={30}
                  />
                </TouchableOpacity>
                <Divider leadingInset={10} trailingInset={0} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

      }
      
      </View>
      <ExerciceInfo toggleModal={toggleModal} exercice={selectedExercice} isModalVisible={isModalVisible}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default ListExercice;
