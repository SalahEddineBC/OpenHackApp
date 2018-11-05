import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ReminderCard from './reminderCard';

import {
  Container,
  Header,
  Content,
  Carde,
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
       <ReminderCard
        ></ReminderCard>
    );
  }
}
