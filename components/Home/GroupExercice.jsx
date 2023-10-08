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
import { BackgroundImage } from "@rneui/base";
import { Divider } from "@react-native-material/core";

const EXERCICES = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];

const GroupExercice = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [bodyPart,setBodyPart] = useState([]);
  const [showHeader, setShowHeader] = useState(true);

  const updateSearch = (search) => {
    setSearch(search);
  };


  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
        headers: {
            'X-RapidAPI-Key': 'b31ae75f0emsha93d0d4ebe0de9bp1940d6jsndb53ce76cef1',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setBodyPart(json)
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
        left={<Button onPress={() => navigation.goBack()} title="annuler" />}
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
          bodyPart.length>0 ?
          <View>
          <Divider leadingInset={10} trailingInset={0} />
          <FlatList
            data={bodyPart}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.exerciceItem}
                  onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate("ListExercice", { name: item });
                  }}
                >
                  <Text>{item}</Text>
                  <Ionicons name="chevron-forward-outline" size={25} />
                </TouchableOpacity>
                <Divider leadingInset={10} trailingInset={0} />
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
          :
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator  size="large" color="black" />
          </View>
        }
        
      </View>
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

export default GroupExercice;
