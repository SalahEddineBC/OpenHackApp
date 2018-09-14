import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Content
} from 'native-base';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.thumbnail}>
          <Icon
            name="md-question"
            style={{ fontSize: 100, alignItems: 'center' }}
          />
        </View>
        <Text style={styles.text}>{this.props.question}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [{ question: 'lol' }],
      progress: 0.0,
      anwsers: []
    };
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(res => this.setState({ questions: res }))
      .catch(err => {
        console.log(err);
      });
  }

  handleYup = card => {
    this.setState((prevState, props) => ({
      progress: prevState.progress + 1 / this.state.questions.length
    }));
    this.setState(prevState => ({
      responses: [...prevState.responses, card.question]
    }));
  };

  handleNope = card => {
    this.setState((prevState, props) => ({
      progress: prevState.progress + 1 / this.state.questions.length
    }));
  };

  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#4ac29a">
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Diagnostic</Title>
          </Body>
        </Header>
        <SwipeCards
          cards={this.state.questions}
          loop={false}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          yupText={'OUI'}
          nopeText={'NON'}
          smoothTransition
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 40
          }}
        >
          <Progress.Bar progress={this.state.progress} width={200} />
        </View>
      </Container>
    );
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
    elevation: 1
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  thumbnail: {
    width: 250,
    height: 250
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#4ac29a'
  }
});
