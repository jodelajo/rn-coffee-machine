import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Stijl() {
  return (
    <View style={styles.container}>
      <Text>Stijl</Text>
      
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
