import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, FlatList, Platform } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Stijl({ navigation }) {
  const {
    allCoffee,
    setSelectedCoffee,
    extraHandler,
    setHasMilk,
    setHasSugar,
  } = useContext(CoffeeContext);

  const [selectedType, setSelectedType] = useState();

  useEffect(() => {
    setSelectedCoffee(selectedType);
    extraHandler();
    setHasMilk(false);
    setHasSugar(false);
  }, [selectedType]);

  function renderCoffeeItem(itemData) {
    return (
      <CoffeeDetail
        content={itemData.item.name}
        source={itemData.item.icon}
        onPressHandler={() => {
          setSelectedType(itemData.item.name);
          navigation.navigate("Size", {
            coffeeSizes: itemData.item.sizes,
            coffeeExtras: itemData.item.extras,
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
          data={allCoffee}
          renderItem={renderCoffeeItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export const screenOptionsStijl = (navData) => {
  if (Platform.OS === "ios") {
    return {
      headerTitle: "",
      headerBackTitle: "Brew with Lex",
      headerBackTitleStyle: styles.back,
      headerTintColor: "black",
      headerStyle: {
        borderBottomWidth: 0,
      },
    };
  } else {
    return {
      headerTitle: "Brew with Lex",
      headerTitleStyle: styles.back,
    };
  }
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
    width: "100%",
  },
  back: {
    fontFamily: "avenirNextBold",
    fontSize: 16,
  },
});
