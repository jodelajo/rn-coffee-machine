import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MachineSvg from "../components/MachineSvg";
import Header from "../components/Header";


export default function Scan({ navigation }) {
 
  return (
    <View style={styles.container}>

      <MachineSvg />
     
      <Text style={styles.text}>How does this work?</Text>
    </View>
  );
}

export const screenOptionsScan = (navData) => {
  return {
    headerTitle: "",
    
    header: () => 
        <Header
          titleContent={"Dark Roasted Beans"}
          subTitleContent={"Tab the machine to start"}
        />
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 0,
    marginLeft: 0,
  },
  button: {
    flexDirection: "row",
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
