import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList} from 'react-native';
import SubTitle from "../components/SubTitle";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";
import { useNavigation } from '@react-navigation/native';

export default function Size( {route}) {
  const { coffeeSizes, coffeeExtras} = route.params;
  const { sizes} = useContext(CoffeeContext);
  // const [coffeeSizes, setCoffeeSizes] = useState();
  
  const altNavigation = useNavigation()

  function onPressHandler() {
    altNavigation.navigate("Extra")
}
  console.log('sizes', coffeeSizes);
  console.log('extras', coffeeExtras);


  function renderCoffeeItem(itemData) {
    return (
     
        <CoffeeDetail 
        content={itemData.item} 
        onPressHandler={() => {
          navigation.navigate("Size", {
            coffeeName: itemData.item.name,
           coffeeId: itemData.item._id,
          
          });
        }

        }
        />
     
    );
  }

  useEffect(() => {
    // setCoffeeSizes(sizes);
   
  }, []);


  return (
    <View style={styles.container}>
      <SubTitle content="Select your size" />
      <View style={styles.coffeeDetail}>
      <FlatList
        data={coffeeSizes}
        renderItem={renderCoffeeItem}
        keyExtractor={(item, index) => item._id}
        
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
    width: '100%',
   },
});
