import React, {useContext} from 'react'
import { SELECTED_COFFEE } from "./store";
import { CoffeeContext } from "../context/CoffeeContext";


const {coffeeData} = useContext(CoffeeContext)

const initialState = {
    coffeeTypes: coffeeData.types,
    coffeeSizes: coffeeData.Sizes,
    extras: coffeeData.extras
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case  SELECTED_COFFEE: return {...state, coffeeTypes: action.payload};
    };
   
    
}

export default reducer