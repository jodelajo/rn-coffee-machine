import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './screens/Scan';

export default function App() {
  return (
    <View style={styles.container}>
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
