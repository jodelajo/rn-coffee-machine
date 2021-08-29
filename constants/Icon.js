import React, { useContext, useState, useEffect } from 'react'
import { Image, View } from 'react-native';
import { CoffeeContext } from "../context/CoffeeContext";


export default function Icon({source}) {
    const { types, setTypes,  espresso, ristretto, cappuccino} = useContext(CoffeeContext);
    const [iconRistretto, setIconRistretto] = useState()
    const [iconCappuccino, setIconCappuccino] = useState()
    const [iconEspresso, setIconEspresso] = useState()
    // const [icon, setIcon] = useState()

useEffect(()=> {
  iconSource()
},[])

// console.log( espresso.icon);

const iconSource = () => {
  if (espresso) {
    return source=require('../assets/espresso.png')
  }
  if (cappuccino) {
    return source=require('../assets/cappuchino.png')
  }
  // if (ristretto) {
  //   return ristretto.icon
  // }
}

const bla = iconSource();
console.log('bl',bla);

return (<View><Image source={source}/></View>)
}