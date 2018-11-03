import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import {Dimensions, View, Text, Platform} from 'react-native'
import Archive from '../layer/archive/Archive'
import Dashboard from '../layer/dashboard/Dashboard'
import Profile from '../layer/profile/Profile'

const {width, height} = Dimensions.get('window')

const viewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 40,
}

export const RootTab = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
  },

  Archive: {
    screen: Archive,
  },

  Profile: {
    screen: Profile,
  }
})

export const RootStack = createStackNavigator(
  {
    Dashboard: Dashboard,
    Archive: Archive,
    Profile: Profile,
  },
)