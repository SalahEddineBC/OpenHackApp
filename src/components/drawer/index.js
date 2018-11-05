/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Container, Header, Content, Carde, CardItem } from 'native-base';
import firebase from 'react-native-firebase';
class DrawerMenu extends Component {
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    return <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 200, backgroundColor: '#4ac29a' }}>
            <View style={{ marginTop: 50, alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontFamily: 'futurapt-bold', color: '#fff' }}>
                Daily Attendance
              </Text>
              
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Loading')}>
                Page1
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 2</Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text onPress={this.signOutUser}>This is my fixed footer</Text>
        </View>
      </View>;
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object
};

export default DrawerMenu;
