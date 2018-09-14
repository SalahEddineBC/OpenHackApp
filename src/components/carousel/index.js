import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CarouselCard from 'react-native-card-carousel';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
  }
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
  
<CarouselCard
          height={250}
          autoplay
          interval={4000}
          data={itemArr}
          onPress={item => { }}
          contentRender={item => <CustomView item={item} />}
        />
      </View>
    );
  }
}
