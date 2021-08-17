import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Size({ navigation, route }) {
  const { coffeeSizes, coffeeExtras, coffeeNames   } = route.params;
  const { sizes, extras, setSelectedSize, selectedSize } = useContext(CoffeeContext);
 
  const [large, setLarge] = useState({});
  const [venti, setVenti] = useState({});
  const [tall, setTall] = useState({})
  const [size, setSize] =useState()

  const [sugar, setSugar] = useState({})
  const [normalSugar, setNormalSugar ] = useState()
  const [milk, setMilk] = useState()
 

  useEffect(() => {
    setLarge(largeCoffee);
    setVenti(ventiCoffee);
    setTall(tallCoffee);
    setSelectedSize(size)
    // setSelectedCoffee([...selectedCoffee], size)
    // setNaam(coffeeNames)
    

  }, [coffeeSizes, size]);

  const largeCoffee = sizes.find((size) => {
    return size.name === "Large";
  });

const ventiCoffee = sizes.find((size) => {
  return size.name === "Venti"
})

const tallCoffee = sizes.find((size) => {
  return size.name === "Tall"
})


const coffeeContent = coffeeSizes.map((size) => {
  if (size === large._id) {
    return large.name
  } if (size === venti._id) {
    return venti.name
  } if (size === tall._id) {
    return tall.name
  }
})


// console.log('coffeeNems', coffeeExtras);


const sugarOptions = extras.find((size) => {
  return size.name === "Select the amount of sugar";
});

// console.log('sugarObject',coffeeContent);
// console.log('selected size', size);



  function renderCoffeeItem(itemData, index) {
    return (
      <CoffeeDetail
        content={itemData.item}
        index={index}
        onPressHandler={() => {
          setSize(itemData.item)
          navigation.navigate("Extra", {
            
            
           sugarOptions: sugarOptions
           
            
          });
        }}
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
          keyExtractor={(item, index) => index.toString()}
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
