import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ComfirmButton({ title, onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#219653",
    padding: 16,
    width: 200,
    borderRadius: 32,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  text: {
    fontFamily: "avenirNextBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
