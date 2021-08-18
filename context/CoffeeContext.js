import React, { createContext, useState, useEffect } from "react";
import { useFetchCoffeeAPI } from "../data/CoffeeData";

export const CoffeeContext = createContext({});

export default function CoffeeContextProvider({ children }) {
  const [coffeeData, setCoffeeData] = useState({});
  const [sizes, setSizes] = useState();
  const [types, setTypes] = useState();
  const [extras, setExtras] = useState();
  const [sugar, setSugar] = useState()
  const [milk, setMilk] = useState()
  const [selectedCoffee, setSelectedCoffee] = useState()
  const [selectedSize, setSelectedSize ] = useState()
  const [selectedSugar, setSelectedSugar] = useState()
  const [ selectedMilk, setSelectedMilk] = useState()
 
  const selectedAll = {selectedCoffee, selectedSize, selectedSugar, selectedMilk}

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

  console.log('all', selectedAll);
// console.log(coffeeData);

  function extraHandler() {
    if (extras) {
      setSugar(extras[0])
      setMilk(extras[1]);
    }
  }
  
  console.log('milk', milk);
  console.log('sugar', sugar);

  const data = {
    types: types,
    extras: extras,
    sizes: sizes,
    sugar: sugar,
    milk, milk,
    selectedCoffee: selectedCoffee,
    setSelectedCoffee,
    selectedSize: selectedSize,
    setSelectedSize,
    selectedSugar: selectedSugar,
    setSelectedSugar,
    extraHandler
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
