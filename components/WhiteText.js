import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WhiteText({ content }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },

  text: {
    fontFamily: "avenirNext",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.374,
    color: "white",
  },
});
