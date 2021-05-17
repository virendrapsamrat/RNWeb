// In App.js in a new project

/**
 * SiceMe Supply React Native App
 *
 * @format
 * @flow strict-local
 */

/**
 * Homeopathy Supply React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import RootStackScreen from './src/Routes';
import {NavigationContainer} from '@react-navigation/native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.disableYellowBox = true;
  }

  render() {
    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  }
}

export default App;
