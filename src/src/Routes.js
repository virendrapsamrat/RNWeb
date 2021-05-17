//define routes here for react-navigation

//define routes here for react-navigation

import * as React from 'react';
import MobileLogin from './scenes/MobileLogin';
import SignUpLogin from './scenes/SignUpLogin';
import UserDetails from './scenes/UserDetails';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="MobileLogin"
        component={MobileLogin}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen name="SignUpLogin" component={SignUpLogin} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};
export default RootStackScreen;
