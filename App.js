import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { SwitchNavigator } from 'react-navigation';
import {
  Loading,
  Login,
  Main,
  SignUp,
  LandingPage,
  Diag,
} from './src/components';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}> {this.props.name}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetch('http://localhost:5000/add', {
      method: 'POST',
      body: this.props.answers
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        alert(JSON.stringify(data));
      });
  }
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

import { ScrollView } from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import MainDrawer from './src/components/drawer';
const App = DrawerNavigator(
  {
    Home: {
      screen: Main
    },
    SignUp: {
      screen: SignUp
    },
    Loading: {
      screen: Loading
    },
    Login: {
      screen: Login
    },
    LandingPage: {
      screen: LandingPage
    },
    Diag: {
      screen: Diag
    },
  },
  {
    contentComponent: MainDrawer,
    initialRouteName: 'Diag'
  }
);
/*
const App = SwitchNavigator(
  { 
    LandingPage,
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'LandingPage'
  }
);*/
export default App;
