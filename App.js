import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {SwitchNavigator} from 'react-navigation';
import {Loading,Login,Main,SignUp} from "./src/components";

=======
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import { SwitchNavigator } from 'react-navigation';
import { Loading, Login, Main, SignUp } from './src/components';
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
>>>>>>> c5db8779d6e1477b93c4020879f7af23bd3150f7
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
<<<<<<< HEAD
);
=======
);*/
>>>>>>> c5db8779d6e1477b93c4020879f7af23bd3150f7
export default App;
