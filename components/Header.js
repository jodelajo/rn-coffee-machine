import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';

export default function Header() {
  return (
    <View style={styles.container}>
     <Title content={'Dark Roasted Beans'} />
     <SubTitle content={'Tab the machine to start'} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingLeft: 12,
    height: 130,
    left: 0,
    top: 0,
  },
});
