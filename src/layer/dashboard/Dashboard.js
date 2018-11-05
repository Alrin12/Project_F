import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, Platform} from 'react-native'
import {Container} from '../../common/ui/Theme'
import NewApparel from './components/NewApparel'


export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <NewApparel/>
        </ScrollView>
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    ...Container,
  },

  scrollViewContainer: {
  },

  contentContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        paddingHorizontal: 0,
      },

      android: {
        paddingHorizontal: 0,
      }
    })
  }
})