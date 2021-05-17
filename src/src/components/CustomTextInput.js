import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

const CustomTextInput = ({
  sourceImage,
  placeholderValue,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  defaultValue,
}) => {
  return (
    <View style={styles.textInputStyle}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={sourceImage} />
      </View>
      <View style={{flex: 5}}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="blue"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholderValue}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          defaultValue={defaultValue}></TextInput>
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#F1F1F1',

    // width: 350,
    // height: 42,
    width: '80%',
    height: 60,
    //margin: 5,
    marginTop: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    //paddingVertical: 10
  },
  textInput: {
    color: 'grey',
    paddingVertical: 10,
    fontSize: 20,
  },
});
