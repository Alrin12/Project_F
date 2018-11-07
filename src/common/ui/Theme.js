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

export const ImageTitle = {
  fontSize: 15,
  fontWeight: '500',
}

export const ImageSubtitle = {
  fontSize: 12,
  fontWeight: '400',
}

export const BottomPositionItem = {
  justifyContent: 'flex-end',
}

export const ScrollViewContainer = {
  paddingVertical: 20,
  paddingHorizontal: 20,
}