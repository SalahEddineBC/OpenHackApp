import React, { Component } from 'react';
import {View,ScrollView} from 'react-native';
import ReminderCard from './reminderCard';



export default class ListCards extends Component {
  render() {
    return (
<View >
  <ScrollView >
    {this.props.array.map(e=> {
      return <ReminderCard
        text={e.text}
        description={e.description}
        type={e.type}
        date={e.date}/>
    }

)
}
</ScrollView>
</View>
    );
  }
  }
