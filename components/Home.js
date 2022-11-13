import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
   return ( 
    <View style={styles.container}>
        <Text style={styles.centerText}>What Do {'\n'} You Want To {'\n'} Eat Today?</Text>
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
    centerText: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });

export default Home;
