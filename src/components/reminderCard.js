import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from 'native-base';

export default class ReminderCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            {this.props.text && <Text className="text">{this.props.text}</Text>}
            {this.props.description && (
              <Text className="description">{this.props.description}</Text>
            )}
          </Body>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'green',
    width: 200,
    marginLeft: 20
  }
});
