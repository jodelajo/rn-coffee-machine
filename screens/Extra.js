import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";
import SubTitle from "../components/SubTitle";
import Sugar from "../components/Sugar";

export default function Extra({ navigation, route }) {
  const { coffeeExtras, sugarOptions } = route.params;
  const {  extras, sugar } = useContext(CoffeeContext);
  const [options, setOptions] = useState()
  

useEffect(() =>{
  setOptions(coffeeExtras)
},[])



console.log('options', options);


  return (
    <View style={styles.container}>
      <SubTitle content="Select your Extra's" />
      <View style={styles.coffeeDetail}>
      <Sugar content={sugar.name} optionsSugar={options}/>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  coffeeDetail: {
    paddingVertical: 10,
    width: "100%",
  },
});
