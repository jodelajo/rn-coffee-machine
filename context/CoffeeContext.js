import React, { createContext, useState, useEffect } from "react";
import { useFetchCoffeeAPI } from "../data/CoffeeData";

export const CoffeeContext = createContext({});

export default function CoffeeContextProvider({ children }) {
  const [coffeeData, setCoffeeData] = useState({});
  const [sugar, setSugar] = useState();
  const [milk, setMilk] = useState();
  const [sizes, setSizes] = useState();
  const [types, setTypes] = useState();
  const [extras, setExtras] = useState();

  useEffect(() => {
    getCoffeeData();
  }, []);

  async function getCoffeeData() {
    let result = await useFetchCoffeeAPI();

    setCoffeeData(result);
    setExtras(result.extras);
    setTypes(result.types);
    setSizes(result.sizes);
  }



 function CoffeeTypeHandler() {
if (types.sizes === sizes ) {
    return sizes;
    {types && types.map((type) => {
        <View>
            <Text>{type}</Text>
        </View>
    })}
}
 }

console.log('sizes', sizes);
console.log('types size', types);
console.log('bla', coffeeData);

  const data = {
    coffeeData: coffeeData,
    setCoffeeData: setCoffeeData,
    types: types,
    extras: extras,
    sizes: sizes,
    CoffeeTypeHandler: CoffeeTypeHandler
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
