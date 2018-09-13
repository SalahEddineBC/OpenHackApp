import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ReminderCard from './reminderCard';

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

export default class ListCards extends Component {
  render() {
    return (
      <Content>
        {this.props.array.map(e => {
          return <ReminderCard
            text={e.text}
            description={e.description}
            type={e.type}
            date={e.date}
          />;
        })}
      </Content>
    );
  }
}
