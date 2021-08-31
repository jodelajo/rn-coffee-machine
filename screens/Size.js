import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Size({ navigation, route }) {
  const { coffeeSizes, coffeeExtras } = route.params;
  const {
    sizes,
    setSelectedSize,
    setSelectedSugar,
    setSelectedMilk,
    milk,
    sugar,
    setHasMilk,
    setHasSugar,
    allSizes,
  } = useContext(CoffeeContext);
  const [size, setSize] = useState();

  useEffect(() => {
    setSelectedSize(size);
    setMilk();
    setSugar();
    setSelectedSugar("no sugar");
    setSelectedMilk("no milk");
  }, [size]);


  const largeCoffee = sizes.find((size) => {
    return size.name === "Large";
  });

  const ventiCoffee = sizes.find((size) => {
    return size.name === "Venti";
  });

  const tallCoffee = sizes.find((size) => {
    return size.name === "Tall";
  });

  const coffeeContent = coffeeSizes.map((size) => {
    if (size === largeCoffee._id) {
      return largeCoffee.name;
    }
    if (size === ventiCoffee._id) {
      return ventiCoffee.name;
    }
    if (size === tallCoffee._id) {
      return tallCoffee.name;
    }
  });


  function setMilk() {
    if (coffeeExtras.includes(milk._id)) {
      setHasMilk(true);
    }
  }
  function setSugar() {
    if (coffeeExtras.includes(sugar._id)) {
      setHasSugar(true);
    }
  }

  function renderCoffeeItem(itemData) {
    function onPress() {
      setSize(itemData.item);
      navigation.navigate("Extra", {
        coffeeExtras: coffeeExtras,
      });
    }

    const source = allSizes.find((size) => {
      if (size.name === itemData.item) {
        return size.icon;
      }
    });

    return (
      <CoffeeDetail
        content={itemData.item}
        source={source.icon}
        onPressHandler={onPress}
      />
    );
  }

  return (
    <View style={styles.container}>
      <SubTitle content="Select your size" />
      <View style={styles.coffeeDetail}>
        <FlatList
          data={coffeeContent}
          renderItem={renderCoffeeItem}
          keyExtractor={(index) => index.toString()}
        />
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
