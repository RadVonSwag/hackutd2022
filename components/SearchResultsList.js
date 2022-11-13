import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import axios from "axios";

const USER_QUERY = "burger";
const API_KEY = "8fd1828fda96413997b81f0bb76c62d5";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const SearchResultsList = () => {
  function getResults(query) {
    const [results, setResults] = React.useState(null);
    React.useEffect(() => {
        axios
        .get(
          "https://api.spoonacular.com/food/menuItems/search?apiKey=" +
            API_KEY +
            "&query=" +
            query +
            "&number=100"
        )
        .then((response) => {
          setResults(response.data);
        });
    }, [])

    resultsObj = JSON.parse(results);
    console.log(resultsObj.menuItems)

    return resultsObj;
  }

  return (
    <View style={styles.container}>
        <Button onPress={() => this.getResults(USER_QUERY)/>}
      <FlatList
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.menuItems}</Text>
        )}
      />
    </View>
  );
};

export default SearchResultsList;
