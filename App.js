import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './screens/Scan';
import Header from './components/Header';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';



function fetchFonts() {
  return Font.loadAsync({
    "avenirNext": require("./assets/fonts/AvenirNext-Regular.ttf"),
    "avenirNextBold": require("./assets/fonts/AvenirNext-Bold.ttf"),
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
    <View style={styles.container}>
      <Header/>
     <Scan/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
