import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeDetail from "../components/CoffeeDetail";
import SubTitle from "../components/SubTitle";
import Sugar from "../components/Sugar";

export default function Extra({ navigation, route }) {
  const { coffeeExtras, sugarOptions } = route.params;
  const {  extras } = useContext(CoffeeContext);
  const [options, setOptions] = useState({})
  const [sugar, setSugar] = useState({})
  const [normalSugar, setNormalSugar ] = useState()
  const [milk, setMilk] = useState()
  const [subSelections, setSubSelections] = useState([])

  

//  console.log('extra', extras);
//  console.log(coffeeExtras);
// console.log('route', route);
// console.log('options', options);


// const sugarOpt = sugarOptions.find((size) => {
//   return size.name === "Select the amount of sugar";
// });

// console.log('sugarObject',sugarOptions.name);
// console.log(sugarOptions);
// console.log('sugar', sugar);
// console.log('subselections', sugar.subselections[0].name);
// console.log('subbie', subSelections);





useEffect(() =>{

  setOptions(coffeeExtras)
  setSugar(sugarOptions)
  setSubSelections(sugar.subselections)
 
},[])



  // function renderCoffeeItem(itemData, index) {
  //   return (
  //     <CoffeeDetail
  //       content={itemData.item}
        
  //       index={index}
  //       onPressHandler={() => {
  //         navigation.navigate("Test", {
           
  //          hoi: 'hoi',
  //          test: itemData
  //         });
  //       }}
  //     />
  //   );
  // }

  return (
    <View style={styles.container}>
      <SubTitle content="Select your Extra's" />
      {/* <View style={styles.coffeeDetail}>
        <FlatList
          data={sugar}
          renderItem={renderCoffeeItem}
          keyExtractor={(item, index) => item}
        />
      </View> */}
      <View style={styles.coffeeDetail}>
      <Sugar content={sugarOptions.name} subselections={sugar.subselections}/>
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
