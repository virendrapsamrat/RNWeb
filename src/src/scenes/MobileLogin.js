import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import R from '../R';
import CustomTextInput from '../components/CustomTextInput';
import scale, {verticalScale} from '../../res/Scale';

const MobileLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: verticalScale(28),
          }}>
          <Image
            source={R.images.ic_launcher}
            style={{height: scale(37), width: scale(37), marginRight: scale(9)}}
          />
          <Image
            source={R.images.goDutch}
            style={{height: scale(35), width: scale(141)}}
          />
        </View>
        <View style={{marginTop: 65, marginBottom: 64}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle}>Mobile Number</Text>
            <Text style={{color: 'red'}}>*</Text>
          </View>
          <CustomTextInput keyboardType="numeric" />
        </View>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('SignUpLogin')}
        />
      </Card>
    </View>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  textStyle: {
    paddingHorizontal: 5,
    fontWeight: '500',
    fontSize: scale(14),
    opacity: 0.8,
  },
});
