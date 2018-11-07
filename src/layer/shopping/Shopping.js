import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {Container, ScrollViewContainer} from "../../common/ui/Theme";
import {shoppingStore} from './ShoppingStore'
import BlurImageCard from '../../common/ui/card/BlurImageCard'

export default class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: []
    }
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return {brand: shoppingStore.getBrandLIst()}
    })
  }

  render() {
    return(
      <View style={Container}>
        <ScrollView style={ScrollViewContainer}>
          <View style={styles.contentWrapper}>
            {
              this.state.brand.map((brand, index) => {
                return (
                  <BlurImageCard
                    image={brand.image}
                    title={brand.brand}
                    subtitle={brand.brand_kr}
                    key={index}
                    width={300}
                    height={420}
                    blur={true}
                    shadow={true}
                    borderRadius={20}
                  />
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})