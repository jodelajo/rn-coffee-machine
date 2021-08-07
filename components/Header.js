import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';

export default function Header({ titleContent, subTitleContent}) {
  return (
    <View style={styles.container}>
     <Title content={titleContent} />
     <SubTitle content={subTitleContent} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    color: 'black',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingLeft: 12,
    height: 130,
    left: 0,
    top: 0,
    zIndex: 2,
  },
});
