import React from 'react';
import { StyleSheet, Platform, Image, View, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';
<<<<<<< HEAD
import ListCards from './listCards';
=======
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Body,
  Button,
  Left,
  Title
} from 'native-base';
const { height, width } = Dimensions.get('window');
>>>>>>> c5db8779d6e1477b93c4020879f7af23bd3150f7

import MapView, { Marker } from 'react-native-maps';
export default class Main extends React.Component {
<<<<<<< HEAD
    state = { currentUser: null }
    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    };
     array =[
      {
        text:"a",
        description:"b"
      },
      {
        text:"g",
        description:"h"
      }
    ];
    render() {
        const { currentUser } = this.state
        return <View style={styles.container}>
            <Text>Hi {currentUser && currentUser.email}!</Text>
            <Button title="logout" onPress={() => this.signOutUser()} />

          <ListCards array={this.array} />
</View>;
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
=======
  state = { currentUser: null };

  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  state = {
    position: {
      latitude: 0.0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.034
        };
        this.setState({
          position: pos
        });
        this.gotoCurrentLocation();
      },
      error => console.warn(error.message),
      { enableHighAccuracy: true, timeout: 2500, maximumAge: 3600 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      const pos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.034
      };
      this.setState({
        position: pos
      });
      this.gotoCurrentLocation();
    });
  };
  gotoCurrentLocation = () => {
    const { position } = this.state;
    this.map.animateToRegion({
      latitude: parseFloat(position.latitude),
      longitude: parseFloat(position.longitude),
      latitudeDelta: parseFloat(position.latitudeDelta),
      longitudeDelta: parseFloat(position.longitudeDelta)
    });
  };

  render() {
    const { currentUser } = this.state;
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
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <MapView
                  style={styles.mapcard}
                  ref={ref => (this.map = ref)}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  showsCompass={true}
                  region={this.state.position}
                  initialRegion={{
                    latitude: 0.0,
                    longitude: 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Grid>
                  <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
                  <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
                </Grid>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <MapView
                  style={styles.mapcard}
                  ref={ref => (this.map = ref)}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  showsCompass={true}
                  region={this.state.position}
                  initialRegion={{
                    latitude: 0.0,
                    longitude: 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Grid>
                  <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
                  <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
                </Grid>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapcard: {
    width: width * 0.9,
    height: 300
  },
  fill: {
    backgroundColor: 'red',
    height: 100
  },
  header: {
    backgroundColor: '#4ac29a'
  }
});
>>>>>>> c5db8779d6e1477b93c4020879f7af23bd3150f7
