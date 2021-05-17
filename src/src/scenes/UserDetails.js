import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Card from '../components/Card';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import scale, {verticalScale} from '../../res/Scale';

const UserDetails = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: verticalScale(20)}}>
      <Text style={styles.textStyle}>Your Details</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Card>
          <View style={{marginBottom: 25}}>
            <Text style={styles.cardText}>Name</Text>
            <CustomTextInput />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.cardText}>Mobile No</Text>
            <CustomTextInput />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.cardText}>Upi Id</Text>
            <CustomTextInput />
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.cardText}>Profession</Text>
            <CustomTextInput />
          </View>
        </Card>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Third')}
        />
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  textStyle: {
    //font-family: Montserrat;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    padding: 10,
  },
  cardText: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 19,
    paddingTop: 16,
  },
});
