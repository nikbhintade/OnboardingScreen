import React from 'react';
import { BackHandler, Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Enjoy Life',
    text: 'Description.\nSay something cool',
    image: require('./images/1.png'),
  },
  {
    key: '2',
    title: 'You Need Some Time',
    text: 'Other cool stuff',
    image: require('./images/2.png'),
  },
  {
    key: '3',
    title: 'Enjoy The Sea',
    text: 'I\'m already out of descriptions\nLorem ipsum bla bla bla',
    image: require('./images/3.png'),
  }
];

export default class App extends React.Component {

  _renderItems = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%'
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: "#21465b",
            alignSelf: 'center'
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: '#b5b5b5',
            paddingHorizontal: 30
          }}
        >
          {item.text}
        </Text>
      </View>
    )
  }
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItems}
        data={slides}
        dotStyle={{
          backgroundColor: 'rgba(181, 181, 181, .15)'
        }}
        activeDotStyle={{
          backgroundColor: 'rgba(200, 200, 200, .9)'
        }}
      />
    );
  }
}