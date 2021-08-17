import React, { useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "./CoffeeDetail";
import WhiteText from "./WhiteText";
import Colors from "../constants/Colors";
import ModalDropdown from "react-native-modal-dropdown";


export default function Sugar({ content, subselections }) {
    const { sizes, extras, setSelectedSize, selectedSize } = useContext(CoffeeContext);
    




  return (
    <View style={styles.container}>
      {/* <WhiteText content={content}/> */}
      <ModalDropdown
        defaultValue={content}
        defaultTextStyle={styles.text}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownText}
        isFullWidth={true}
        options={['boe', 'jaja']}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    fontFamily: "avenirNext",
    width: "100%",
    height: 70,
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 4,
  },
  text: {
    
    margin: 20,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.374,
    color: "white",
    backgroundColor: Colors.green,
  },
  dropdownText: {
    color: "white",
    backgroundColor: "#9BC88B",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 60,
  },

  dropdown: {
    backgroundColor: Colors.green,
  },
});
