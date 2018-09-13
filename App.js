import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import {SwitchNavigator} from 'react-navigation';
import {Loading,Login,Main,SignUp} from "./src/components";

import {  ScrollView } from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import MainDrawer from './src/components/drawer';
const App = DrawerNavigator(
  {
    Home: {
      screen: Main
    },
    Notifications: {
      screen: SignUp
    }
  },
  {
    contentComponent: MainDrawer
  }
);
/*
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
);*/
export default App;
