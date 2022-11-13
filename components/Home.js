import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
   return ( 
    <View style={styles.container}>
<Text style={styles.topText}>What are you<Text style={styles.centerText}> {"\n"}craving</Text>   <Text style={styles.bottomText}>{"\n"}today?</Text> </Text>
        <Button title = "Dev Button" onPress={() => navigation.navigate("DevScreen")}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
// Yellow
    topText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#FCBF49'
      },

// Orange
    centerText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#F77F00'
      },
// Red
    bottomText: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#D62828'
    }

});

export default Home;
