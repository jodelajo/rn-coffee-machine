import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Size() {
  return (
    <View style={styles.container}>
      <Text>Size</Text>
      
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
