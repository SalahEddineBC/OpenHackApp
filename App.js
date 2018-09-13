import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {SwitchNavigator} from 'react-navigation';
import {Loading,Login,Main,SignUp} from "./src/components";

const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
);
export default App;
