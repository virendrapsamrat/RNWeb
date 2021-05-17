import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
});
