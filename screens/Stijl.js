import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Stijl() {
  const { coffeeData } = useContext(CoffeeContext);
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [coffeeIds, setCoffeeIds] = useState()

  console.log('alles', coffeeData);

  
  // console.log("doei", coffeeTypes);
  // console.log('id', coffeeIds);
  // console.log('idd', coffee);

  useEffect(() => {
    setCoffeeTypes(coffeeData.types);
    setCoffeeIds(coffeeTypes._id)
  }, []);

  return (
    <View style={styles.container}>
      <SubTitle content="Select your style" />

      <View style={styles.coffeeDetail}>
        {coffeeTypes &&
          coffeeTypes.map((coffeeType) => (
            <CoffeeDetail title={coffeeType.name} key={coffeeType.name}/>
          ))}
      </View>
    </View>
  );
}

export const screenOptionsStijl = (navData) => {
  return {
    headerTitle: "",
    // headerTitleStyle: styles.title,
    headerBackTitle: "Brew with Lex",
    headerBackTitleStyle: styles.back,
    headerTintColor: "black",
    headerStyle: {
      borderBottomWidth: 0,
    },

    // header: () =>
    //     <Header
    //       titleContent={"Dark Roasted Beans"}
    //       subTitleContent={"Tab the machine to start"}
    //     />
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
width: '100%',

},
  back: {
    fontFamily: "avenirNextBold",
    fontSize: 16,
  },
});
