import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CoffeeContextProvider from "./context/CoffeeContext";
import { Provider as PaperProvider } from "react-native-paper";
import CoffeeNavigator from "./navigation/Navigator";

import Scan from "./screens/Scan";
import Header from "./components/Header";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

function fetchFonts() {
  return Font.loadAsync({
    avenirNext: require("./assets/fonts/AvenirNext-Regular.ttf"),
    avenirNextBold: require("./assets/fonts/AvenirNext-Bold.ttf"),
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <CoffeeContextProvider>
        <PaperProvider>
          <CoffeeNavigator />
        </PaperProvider>
      </CoffeeContextProvider>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <Header /> */}
    //   <Scan />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 0,
    margin: 0,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});
