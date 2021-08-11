import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Stijl({ navigation, route }) {
  const { types, sizes, extras, coffeeTypeHandler, setCoffeeData } =
    useContext(CoffeeContext);
  const [coffeeTypes, setCoffeeTypes] = useState([]);

  console.log("types", coffeeTypes);
  // console.log('sizes', sizes);
  console.log('size!!',route)

  useEffect(() => {
    setCoffeeTypes(types);
    setCoffeeData(types)
  }, []);




  function renderCoffeeItem(itemData, index) {
    return (
      <CoffeeDetail
        content={itemData.item.name}
        onPressHandler={() => {
          navigation.navigate("Size", {
            coffeeName: itemData.item.name,
            coffeeId: itemData.item._id,
            coffeeSizes: itemData.item.sizes,
            coffeeExtras: itemData.item.extras,
            coffeeItem: itemData.item,
           
          });
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <SubTitle content="Select your style" />
      <View style={styles.coffeeDetail}>
        <FlatList
          data={coffeeTypes}
          renderItem={renderCoffeeItem}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    </View>
  );
}

export const screenOptionsStijl = (navData) => {
  return {
    headerTitle: "",
    headerBackTitle: "Brew with Lex",
    headerBackTitleStyle: styles.back,
    headerTintColor: "black",
    headerStyle: {
      borderBottomWidth: 0,
    },
  };
};

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
    // height: 200,
    width: "100%",
  },
  back: {
    fontFamily: "avenirNextBold",
    fontSize: 16,
  },
});
