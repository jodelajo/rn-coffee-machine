import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import SubTitle from "../components/SubTitle";
import Sugar from "../components/Sugar";
import Milk from "../components/Milk";

export default function Extra() {
  const { hasMilk, hasSugar } = useContext(CoffeeContext);

  return (
    <ScrollView >
      <View style={styles.container}>
        <SubTitle content="Select your Extra's" />
        <View style={styles.coffeeDetail}>
          {hasMilk && <Milk />}
          {hasSugar && <Sugar />}
        </View>
      </View>
    </ScrollView>
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
