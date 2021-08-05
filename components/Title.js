import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title( {content} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  text: {
    fontFamily: 'avenirNextBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.374,
    marginTop: 8
  },
});
