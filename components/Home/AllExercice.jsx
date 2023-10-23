import { View } from "react-native";
import { useState,useEffect } from "react";
const AllExercice = () => {
    const [exercices,setExercices] = useState([]);

  useEffect(() => {
    fetch(
      "https://exercisedb.p.rapidapi.com/exercises?limit=10",
      {
        headers: {
          "X-RapidAPI-Key":
            "b31ae75f0emsha93d0d4ebe0de9bp1940d6jsndb53ce76cef1",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        }
      }

    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.length);
        console.log(json[0])
        setExercices(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return(
    <View></View>
  ) 
};

export default AllExercice;