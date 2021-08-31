import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import WhiteText from "../components/WhiteText";

export default function CoffeeDetail({ content, onPressHandler, source }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
        <Image source={source} />
        <WhiteText content={content} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    width: "100%",
    height: 70,
    marginBottom: 10,
    justifyContent: "center",
    paddingLeft: 8,
    borderRadius: 4,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
