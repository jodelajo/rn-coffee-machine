import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import WhiteText from "../components/WhiteText";
import Icon from "../constants/Icon";

import { CoffeeContext } from "../context/CoffeeContext";

export default function CoffeeDetail({
  content,
  onPressHandler,
  id,
  sizes,
  extras,
  source
})
{
  const { types, iconSource } = useContext(CoffeeContext);
  const [icons, setIcons] = useState()
console.log('source', source);


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
        <Icon source={source}/>
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
    alignItems: "flex-start",
    justifyContent: "center",
    // alignSelf: 'stretch',

    borderRadius: 4,
  },
  text: {
    color: "white",
  },
  listItem: {},
});
