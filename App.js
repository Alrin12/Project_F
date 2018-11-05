/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {RootStack, RootTab} from './src/application/Navigator'
import {SafeAreaView} from 'react-navigation'
import {Container} from "./src/common/ui/Theme";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RootStack/>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...Container,
  }
});
