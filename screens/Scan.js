import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MachineSvg from "../components/MachineSvg";
import CardSvg from "../components/CardSvg";

export default function Scan() {
  return (
    <View style={styles.container}>
      <MachineSvg/>
      <CardSvg/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
