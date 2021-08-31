import React, { createContext, useState, useEffect } from "react";
import { useFetchCoffeeAPI } from "../data/CoffeeData";
import Images from "../constants/Images";

export const CoffeeContext = createContext({});

export default function CoffeeContextProvider({ children }) {
  const [coffeeData, setCoffeeData] = useState();
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
  const [tall, setTall] = useState();
  const [large, setLarge] = useState();
  const [venti, setVenti] = useState();

  useEffect(() => {
    getCoffeeData();
  }, []);

  useEffect(() => {
    if ((types, sizes)) {
      iconHandler();
      sizesHandler();
    }
  }, [types, sizes]);

  async function getCoffeeData() {
    let result = await useFetchCoffeeAPI();
    setCoffeeData(result);
    setExtras(result.extras);
    setTypes(result.types);
    setSizes(result.sizes);
  }

  const selectedAll = {
    selectedCoffee,
    selectedSize,
    selectedSugar,
    selectedMilk,
  };
  const allCoffee = [espresso, cappuccino, ristretto];
  const allSizes = [large, venti, tall];

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
          setEspresso({ ...type, icon: Images.espresso });
        }
        if (type.name === "Cappuccino") {
          setCappuccino({ ...type, icon: Images.cappuccino });
        }
        if (type.name === "Ristretto") {
          setRistretto({ ...type, icon: Images.ristretto });
        }
      });
  }

  function sizesHandler() {
    sizes &&
      sizes.map((size) => {
        if (size.name === "Tall") {
          setTall({ ...size, icon: Images.tall });
        }
        if (size.name === "Large") {
          setLarge({ ...size, icon: Images.large });
        }
        if (size.name === "Venti") {
          setVenti({ ...size, icon: Images.venti });
        }
      });
  }

  const data = {
    types,
    allCoffee,
    allSizes,
    espresso,
    cappuccino,
    ristretto,
    extras,
    sizes,
    sugar,
    milk,
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
  };

  return (
    <CoffeeContext.Provider value={data}>{children}</CoffeeContext.Provider>
  );
}
