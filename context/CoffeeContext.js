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


  useEffect(() => {
    setSugar(extras[0])
    setMilk(extras[1])
  }, [extras])

  async function getCoffeeData() {
    let result = await useFetchCoffeeAPI();

    setCoffeeData(result);
    setExtras(result.extras);
    setTypes(result.types);
    setSizes(result.sizes);
  }

  // console.log('contextdata', coffeeData);
  // console.log('extras', extras);
  // console.log('sel size', selectedSize);
  console.log('all', selectedAll);
  console.log('s', sugar);
  console.log('milk', milk);

  const data = {
    // coffeeData: coffeeData,
    // setCoffeeData: setCoffeeData,
    types: types,
    extras: extras,
    sizes: sizes,
    sugar: sugar,
    selectedCoffee: selectedCoffee,
    setSelectedCoffee,
    selectedSize: selectedSize,
    setSelectedSize,
    selectedSugar: selectedSugar,
    setSelectedSugar
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
