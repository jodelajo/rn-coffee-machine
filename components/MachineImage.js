import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ImgSvg from "../components/ImgSvg";

export default function MachineImage() {
  return (
    <View>
      <Image
        source={require("../assets/coffee-machine.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 435,
  },
});
