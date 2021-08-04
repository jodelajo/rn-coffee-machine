import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SubTitle( {content} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'avenirNext',
    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: 24,
    letterSpacing: 0.374,
  },
});
