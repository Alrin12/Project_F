import React, {Component} from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import {ImageTitle, ImageSubtitle} from "../Theme";

export default class SwipeImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle
    }
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          style={styles.imageContainer}
          resizeMode={'cover'}
          source={require('../../../static/temp/shoes1.jpg')}>
          <View style={styles.componentBottomLayer}>
            <Text style={styles.title}>
              {this.state.title}
            </Text>
            <Text style={styles.subtitle}>
              {this.state.subtitle}
            </Text>
          </View>
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
    flex: 1,
    justifyContent: 'flex-end',
    width: 300,
    height: 200,
    borderRadius: 100,
  },

  componentBottomLayer: {
    height: 50,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  title: {
    ...ImageTitle,
    color: 'white'
  },

  subtitle: {
    ...ImageSubtitle,
    color: 'white'
  }
})