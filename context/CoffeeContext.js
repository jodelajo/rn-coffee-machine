import React, { createContext, useState, useEffect } from "react";
import { useFetchCoffeeAPI } from "../data/CoffeeData";

export const CoffeeContext = createContext({});

export default function CoffeeContextProvider({ children }) {
const [coffeeData, setCoffeeData] = useState()


    useEffect(() => {
        getCoffeeData()
      },[])
      
      
      async function getCoffeeData(){
        let result = await useFetchCoffeeAPI()
        // console.log(data._id);
        // console.log(data.extras);
       
        setCoffeeData(result)
        console.log('result', result);
      }
      
console.log(coffeeData);
  const data = {
      coffeeData: coffeeData,
      setCoffeeData: setCoffeeData
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
