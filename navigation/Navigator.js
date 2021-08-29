import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scan from "../screens/Scan";
import Extra from "../screens/Extra";
import Size from "../screens/Size";
import Stijl, { screenOptionsStijl } from "../screens/Stijl";

import { screenOptionsScan } from "../screens/Scan";

const Stack = createNativeStackNavigator();

const defaultNavOptions = {
    headerStyle: {
       fontFamily: 'AvenirNextBold',
       textAlign: 'left', 
    
    },
    headerBackTitleStyle: {
        fontSize: 16,
        fontFamily: 'AvenirNext',
        fontWeight: "bold",
    }
   
}


export default function CoffeeNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Scan" component={Scan} options={screenOptionsScan}  />
      <Stack.Screen name="Stijl" component={Stijl} options={screenOptionsStijl} />
      <Stack.Screen name="Size" component={Size} options={screenOptionsStijl}/>
      <Stack.Screen name="Extra" component={Extra} options={screenOptionsStijl}/>
    
    </Stack.Navigator>
  );
}
