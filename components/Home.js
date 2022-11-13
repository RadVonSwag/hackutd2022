import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>What do you want to eat today?</Text>
      <Button title = "Dev Button" onPress={() => navigation.navigate("DevScreen")}/>
    </View>
  );
};

export default Home;
