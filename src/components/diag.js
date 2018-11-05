import React from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import {
  Container,
  Header,
  Left,
  Body,
  Text,
  Title,
  Label,
  Button,
  Icon,
  Content,
  Card,
  CardItem
} from 'native-base';
import SwipeCards from 'react-native-swipe-cards';
const { height, width } = Dimensions.get('window');

class Carde extends React.Component {
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
        <Text style={styles.text}>{this.props.question} </Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      an: []
    };
    fetch('http://10.0.2.2:3000/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ sym: this.props.data })
    })
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ an: response.symptomes.options });
      })
      .catch(function(error) {
        alert(error);
      });
  }
  componentWillMount() {}
  fetchdata = () => {};
  render() {
    return (
      <View>
        <Text
          style={{
            color: 'green',
            fontSize: 24,
            fontFamily: 'futurapt-bold'
          }}
        >
          {' '}
        </Text>
        {this.state.an.map(element => {
          alert(element);
          return (
            <Card style={{ width: width * 0.95, height: 100 }}>
              <CardItem>
                <Body>
                  <Label style={styles.text}>{element}</Label>
                </Body>
              </CardItem>
            </Card>
          );
        })}
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
      answers: []
    };
    fetch('http://10.0.2.2:3000/')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ questions: response.form });
      })
      .catch(error => {
        alert(error);
      });
  }

  handleYup = card => {
    this.setState((prevState, props) => ({
      progress: prevState.progress + 1 / this.state.questions.length
    }));
    this.setState({
      answers: this.state.answers.concat([card.value])
    });
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
          renderCard={cardData => <Carde {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards data={this.state.answers} />}
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
