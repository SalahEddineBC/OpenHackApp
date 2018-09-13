import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button } from 'react-native';
import firebase from 'react-native-firebase';
import ListCards from './listCards';

export default class Main extends React.Component {
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
