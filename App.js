import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
<<<<<<< HEAD
import {SwitchNavigator} from 'react-navigation';
import {Loading,Login,Main,SignUp, LandingPage  } from "./src/components";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}> {this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    fetch("http://localhost:5000/add",
      {
        method: "POST",
        body: this.props.answers
      })
      .then(function (res) { return res.json(); })
      .then(function (data) { alert(JSON.stringify(data)) })
  }
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}
=======
import { SwitchNavigator } from 'react-navigation';
import { Loading, Login, Main, SignUp } from './src/components';
>>>>>>> ef975580dd0b0c9a6cd791ebfc7a052166671720

import { ScrollView } from 'react-native';

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
