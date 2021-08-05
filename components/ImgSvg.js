import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MachineSvg from "../components/MachineSvg";
import CardSvg from "../components/CardSvg";

export default function ImgSvg() {
  return (
    <View style={styles.container}>
      <MachineSvg/>
      <CardSvg/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
    // backgroundColor: "#ffffff",
    alignItems: "center",
    // justifyContent: "center",
   
  },
 
});


