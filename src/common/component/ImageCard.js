import React, {Component} from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'

export default class ImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          style={styles.imageContainer}
          resizeMode={'cover'}
          source={require('../../static/temp/shoes1.jpg')}>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  imageContainer: {
    width: 300,
    height: 200,
  }
})