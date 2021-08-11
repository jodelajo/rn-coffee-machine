import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SubTitle from "../components/SubTitle";

export default function Test({ route, navigation }) {
  console.log(route);
  console.log("hoi");
  return (
    <View style={styles.container}>
      <Text>poep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    coffeeDetail: {
      paddingVertical: 10,
      width: "100%",
    },
  });