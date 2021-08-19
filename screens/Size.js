import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";

export default function Size({ navigation, route }) {
  const { coffeeSizes, coffeeExtras, coffeeNames   } = route.params;
  const { sizes, extras, setSelectedSize, selectedSize, milk, sugar,  setHasMilk, setHasSugar } = useContext(CoffeeContext);
 
  // const [large, setLarge] = useState({});
  // const [venti, setVenti] = useState({});
  // const [tall, setTall] = useState({})
  const [size, setSize] =useState()
  const [extraOptions, setExtraOptions] = useState()
  // const [hasMilk, setHasMilk] = useState(false)
  // const [hasSugar, setHasSugar] = useState(false)
  

  useEffect(() => {
    // setLarge(largeCoffee);
    // setVenti(ventiCoffee);
    // setTall(tallCoffee);
    setSelectedSize(size)
    setMilk()
    setSugar()
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

// console.log('largeCoffee', largeCoffee);

const coffeeContent = coffeeSizes.map((size) => {
  if (size === largeCoffee._id) {
    return largeCoffee.name
  } if (size === ventiCoffee._id) {
    return ventiCoffee.name
  } if (size === tallCoffee._id) {
    return tallCoffee.name
  }
})


console.log('coffeeNems', coffeeExtras);
console.log('melkie', milk);
function setMilk() {
  if (coffeeExtras.includes(milk._id)) {
    setHasMilk(true)
  }
}
function setSugar() {
  if (coffeeExtras.includes(sugar._id)) {
    setHasSugar(true)
  }
}



// const extraOpt = coffeeExtras.map((extra) => {
//   if (extra === milk._id)
//   {return 'milk'}
// if(extra === sugar._id) {
//   return 'sugar'
// }

// })






// const sugarOptions = extras.find((size) => {
//   return size.name === "Select the amount of sugar";
// });

// console.log(sugarOptions);
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
            coffeeExtras: coffeeExtras,  
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
