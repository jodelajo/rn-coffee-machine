import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Stijl({ navigation, route }) {
  const { types, setSelectedCoffee, extraHandler, setHasMilk, setHasSugar } =
    useContext(CoffeeContext);
  const [coffeeTypes, setCoffeeTypes] = useState();
  const [selectedType, setSelectedType] = useState()


  useEffect(() => {
    setCoffeeTypes(types);
    setSelectedCoffee(selectedType)
    extraHandler()
    setHasMilk(false)
    setHasSugar(false)
  }, [selectedType]);


console.log('sel', selectedType);
// console.log('sll, uit de context', selectedCoffee);
// console.log('coffeetypes', coffeeTypes);
// console.log('types', types);

  function renderCoffeeItem(itemData, index) {
    return (
      <CoffeeDetail
        content={itemData.item.name}
        onPressHandler={() => {
          setSelectedType(itemData.item.name)
          navigation.navigate("Size", {
            coffeeNames: itemData.item.name,
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
