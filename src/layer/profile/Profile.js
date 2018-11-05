import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Text>Profile</Text>
      </View>
    )
  }
}