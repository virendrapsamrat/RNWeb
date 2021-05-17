import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#5A67F2',
    color: '#FFFFFF',
    //marginHorizontal:75,
    //marginVertical: 10,
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 10,
    //marginRight:30,
    //marginLeft: 30,
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    //textAlign:'center',
    borderRadius: 8,
    padding: 15,
    //fontSize:20
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
});
