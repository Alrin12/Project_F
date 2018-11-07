import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import SwipeImageCard from '../ui/card/SwipeImageCard'
import Carousel from "react-native-snap-carousel";
import {ComponentSubtitle, ComponentTitle, Container} from "../ui/Theme"

export default class SwipeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointHeader: this.props.pointHeader,
      title: this.props.title,
      subtitle: this.props.subtitle,
      data: this.props.data,
    }
  }

  _renderItem({item, index}) {
    return (
      <View style={{borderRadius:10, overflow: 'hidden'}}>
        <SwipeImageCard
          title={item.title}
          subtitle={item.subtitle}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.pointHeader}>
            {this.state.pointHeader}
          </Text>
          <Text style={styles.title}>
            {this.state.title}
          </Text>
          <Text>
            {this.state.subtitle}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Carousel
            windowSize={1}
            data={this.state.data}
            renderItem={this._renderItem}
            layout={'default'}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Container,
    paddingTop: 20
  },
  textContainer: {
    paddingLeft: 10
  },
  title: {
    ...ComponentTitle
  },
  pointHeader: {
    ...ComponentSubtitle,
    color: '#1476ff'
  }
})

const horizontalMargin = 10
const slideWidth = 280

const sliderWidth = Dimensions.get("window").width
const sliderHeight = Dimensions.get("window").height
const itemWidth = slideWidth + horizontalMargin * 2
const itemHeight = 100
