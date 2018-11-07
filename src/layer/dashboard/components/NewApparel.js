import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import SwipeContainer from '../../../common/component/SwipeContainer'
import {Container} from "../../../common/ui/Theme";

export default class NewApparel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointHeader: this.props.pointHeader,
      title: this.props.title,
      subtitle: this.props.subtitle,
      testData: [
        {key: 1, title: 'test1', subtitle: 'testestest'},
        {key: 2, title: 'test1', subtitle: 'testestest'},
        {key: 3, title: 'test1', subtitle: 'testestest'}
      ]

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeContainer
          pointHeader={'New Apparel'}
          title={"'신상품'을 찾고 계신가요?"}
          data={this.state.testData}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Container
  },
})
