import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import SubTitle from "../components/SubTitle";
import Sugar from "../components/Sugar";
import Milk from "../components/Milk";
import ConfirmButton from "../components/ConfirmButton";

export default function Extra() {
  const { hasMilk, hasSugar, selectedAll } = useContext(CoffeeContext);

  const title = "Your Choice";
  const yourChoice = `Type: ${selectedAll.selectedCoffee}\n Size: ${
    selectedAll.selectedSize
  }\n  Milk: ${hasMilk ? selectedAll.selectedMilk : "no milk"}\n Sugar: ${
    hasSugar ? selectedAll.selectedSugar : "No sugar"
  }`;

  function onPressHandler() {
    Alert.alert(
      `${title}`,
      `${yourChoice}`,
      [
        {
          text: "Cheers",
          onPress: () => console.log("your choice", selectedAll),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <SubTitle content="Select your Extra's" />
        <View style={styles.coffeeDetail}>
          {hasMilk && <Milk />}
          {hasSugar && <Sugar />}
        </View>
        <View style={styles.button}>
          <ConfirmButton title="Your Choice" onPress={onPressHandler} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 40,
    minHeight: Dimensions.get("window").height * 1,
  },
  coffeeDetail: {
    paddingVertical: 10,
    width: "100%",
    justifyContent: "flex-start",
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
    alignSelf: "center",
  },
});
