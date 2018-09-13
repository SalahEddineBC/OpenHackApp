
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import {SwitchNavigator} from 'react-navigation';
import {Loading,Login,Main,SignUp  } from "./src/components";
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

const cards = [
  { name: 'dfo uou la diarhee', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
  { name: 'khrt bien', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
  { name: 'sdjf', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' }
]

const cards2 = [
  { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
]
/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup(card) {
    console.log("yup")
  }

  handleNope(card) {
    console.log("nope")
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
*/
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