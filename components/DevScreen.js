import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Feather";

const DevScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Icon
        onPress={() => navigation.navigate("Home")}
        style={styles.container}
        name="home"
        size={45}
        color={"#003049"}
      />
      {/* <Button title="button" onPress={() => navigation.navigate("Home")}/> */}
    </ScrollView>
  );
};

export default DevScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",

  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
