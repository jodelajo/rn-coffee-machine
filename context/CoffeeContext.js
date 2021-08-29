import React, { createContext, useState, useEffect } from "react";
import { useFetchCoffeeAPI } from "../data/CoffeeData";

export const CoffeeContext = createContext({});

export default function CoffeeContextProvider({ children }) {
  const [coffeeData, setCoffeeData] = useState({});
  const [sizes, setSizes] = useState();
  const [types, setTypes] = useState();
  const [extras, setExtras] = useState();
  const [sugar, setSugar] = useState();
  const [milk, setMilk] = useState();
  const [hasMilk, setHasMilk] = useState(false);
  const [hasSugar, setHasSugar] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedSugar, setSelectedSugar] = useState();
  const [selectedMilk, setSelectedMilk] = useState();
  const [cappuccino, setCappuccino] = useState();
  const [espresso, setEspresso] = useState();
  const [ristretto, setRistretto] = useState();
  const [iconSource, setIconSource] = useState({
    espresso: "../assets/espresso.png",
    ristretto: "../assets/ristretto.png",
    cappuccino: "../assets/cappuchino.png",
  });
  // const [icons, setIcons] = useState()

  const selectedAll = {
    selectedCoffee,
    selectedSize,
    selectedSugar,
    selectedMilk,
  };

  useEffect(() => {
    getCoffeeData();
  }, []);

  // useEffect(() => {
  //   iconHandler()
  // },[coffeeData])

  async function getCoffeeData() {
    let result = await useFetchCoffeeAPI();

    setCoffeeData(result);
    setExtras(result.extras);
    setTypes(result.types);
    setSizes(result.sizes);
  }

  // console.log("all", selectedAll);
  // console.log("icons", icons);
  // console.log('icons', icons);
  // console.log('types', types[0].name);
  // console.log(coffeeData);
  // console.log('sug', selectedSugar);
  // function hasExtraHandler() {
  //   if (types.extras) {
  //     setHasSugar(true)
  //   }
  // }

  function extraHandler() {
    if (extras) {
      setSugar(extras[0]);
      setMilk(extras[1]);
    }
  }

  function iconHandler() {
    types &&
      types.map((type) => {
        if (type.name === "Espresso") {
          setEspresso({ type, icon: iconSource.espresso });
        }
        if (type.name === "Cappuccino") {
          setCappuccino({ type, icon: iconSource.cappuccino });
        }
        if (type.name === "Ristretto") {
          setRistretto({ type, icon: iconSource.ristretto });
        }
      });
  }

  // console.log("espresso", espresso);
  // const allCoffee = espresso && cappuccino && ristretto && Object.assign(espresso, cappuccino, ristretto)
  // console.log('conext all coffee', allCoffee);
  // console.log('bla', blabla);

  // const allCoffee = ;
  //   const ristrettoCoffee = types.find((type) => {
  //     return type.name === "Ristretto";
  //   });

  // const cappuccinoCoffee = types.find((type) => {
  //   return type.name === "Cappuchino"
  // })

  // const espressoCoffee = types.find((type) => {
  //   return type.name === "Espresso"
  // })

  // const coffeeContent = coffeeSizes.map((size) => {
  //   if (size === largeCoffee._id) {
  //     return largeCoffee.name
  //   } if (size === ventiCoffee._id) {
  //     return ventiCoffee.name
  //   } if (size === tallCoffee._id) {
  //     return tallCoffee.name
  //   }
  // })

  //   console.log('melk', hasMilk);
  // console.log('suiker', hasSugar);
  // console.log('typess', types);

  // console.log('milk', milk);
  // console.log('sugar', sugar._id);

  const data = {
    types,
    // allCoffee,
    espresso,
    cappuccino,
    ristretto,
    extras,
    sizes,
    sugar,
    milk,
    iconSource,
    setTypes,
    hasMilk,
    setHasMilk,
    hasSugar,
    setHasSugar,
    selectedCoffee,
    setSelectedCoffee,
    selectedSize,
    setSelectedSize,
    selectedSugar,
    setSelectedSugar,
    selectedMilk,
    selectedAll,
    setSelectedMilk,
    extraHandler,
    iconHandler,
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
