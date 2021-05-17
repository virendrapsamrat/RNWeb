import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Card from '../components/Card';
import R from '../R';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import scale, {verticalScale} from '../../res/Scale';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignUpLogin = ({navigation}) => {
  const [Selected, setSelection] = useState(false);

  return (
    <ScrollView style={{flex: 1, marginTop: verticalScale(30)}}>
      {/* <View style={{margin: 10}}> */}
      <Text style={styles.textStyle}>setup your GoDutch account</Text>
      {/* </View> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Card>
          <View style={{marginVertical: verticalScale(40)}}>
            <Image
              source={R.images.ic_launcher}
              style={{height: 65, width: 65}}
            />
          </View>
          {console.log(Selected, 'jhhh')}
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.cardText}>current profession</Text>
            <View style={{flexDirection: 'row', marginBottom: 30}}>
              <TouchableOpacity onPress={() => setSelection(!Selected)}>
                <View
                  style={[
                    styles.cardViews1,
                    {borderColor: Selected ? 'grey' : '#5A67F2'},
                  ]}>
                  <Text
                    style={[
                      styles.viewText1,
                      {color: Selected ? 'grey' : '#5A67F2'},
                    ]}>
                    Student
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelection(!Selected)}>
                <View
                  style={[
                    styles.cardViews,
                    {borderColor: Selected ? '#5A67F2' : 'grey'},
                  ]}>
                  <Text
                    style={[
                      styles.viewText,
                      {color: Selected ? '#5A67F2' : 'grey'},
                    ]}>
                    Professional
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginVertical: 30}}>
            <View style={{flexDirection: 'row'}}>
              <Text>full name</Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>

            <CustomTextInput />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>UPI ID</Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>
            <CustomTextInput keyboardType="email-address" />
          </View>

          <View style={{marginTop: verticalScale(20)}}>
            <CustomButton
              title="Continue"
              onPress={() => navigation.navigate('UserDetails')}
            />
          </View>
          {/* <Button
            title="Go to Third Screen"
            onPress={() => navigation.navigate('Third')}
          /> */}
        </Card>
      </View>
    </ScrollView>
  );
};

export default SignUpLogin;

const styles = StyleSheet.create({
  textStyle: {
    //font-family: Montserrat;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    padding: 10,
  },
  cardText: {
    //fontStyle: 'Medium',
    fontSize: 14,
    paddingBottom: 5,
    marginLeft: scale(8),
    marginBottom: verticalScale(5),
  },
  viewText: {
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 19,
  },
  viewText1: {
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 19,
  },
  cardViews1: {
    height: 42,
    width: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    // borderColor: rightToggleStyle,
    alignItems: 'center',
  },
  cardViews: {
    height: 42,
    width: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    // borderColor: [{Selected}] ? 'red' : 'blue',
    alignItems: 'center',
  },
});
