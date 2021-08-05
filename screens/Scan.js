import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MachineSvg from "../components/MachineSvg";

export default function Scan() {
  return (
    <View style={styles.container}>
      <MachineSvg />
      <Text style={styles.text}>How does this work?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "35%",
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 0,
    marginLeft: 0,
  },
  text: {
    paddingTop: "5%",
    paddingLeft: 24,
    paddingBottom: "5%",
    fontFamily: "avenirNext",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
  },
});
