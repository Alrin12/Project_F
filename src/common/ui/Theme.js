import {Platform, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Container = {
  flex: 1, backgroundColor: 'white',
}

export const ComponentTitle = {
  fontSize: 20,
  fontWeight: '500',
}

export const ComponentSubtitle = {
  fontSize: 12,
  fontWeight: '400',
}