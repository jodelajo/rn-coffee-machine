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
  const [hasMilk, setHasMilk] = useState(false)
  const [hasSugar, setHasSugar] = useState(false)
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
// console.log('sug', selectedSugar);
// function hasExtraHandler() {
//   if (types.extras) {
//     setHasSugar(true)
//   }
// }

  function extraHandler() {
    if (extras) {
      setSugar(extras[0])
      setMilk(extras[1]);
    }
  }

//   console.log('melk', hasMilk);
// console.log('suiker', hasSugar);
// console.log('typess', types);

  
  // console.log('milk', milk);
  // console.log('sugar', sugar._id);

  const data = {
    types: types,
    extras: extras,
    sizes: sizes,
    sugar: sugar,
    milk: milk,
    hasMilk: hasMilk,
    setHasMilk,
    hasSugar: hasSugar,
    setHasSugar,
    selectedCoffee: selectedCoffee,
    setSelectedCoffee,
    selectedSize: selectedSize,
    setSelectedSize,
    selectedSugar: selectedSugar,
    setSelectedSugar,
    selectedMilk: selectedMilk,
    setSelectedMilk,
    extraHandler
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
