import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import {Dimensions, View, Text, Platform} from 'react-native'
import Archive from '../layer/archive/Archive'
import Dashboard from '../layer/dashboard/Dashboard'
import Profile from '../layer/profile/Profile'
import Shopping from '../layer/shopping/Shopping'

const {width, height} = Dimensions.get('window')

const viewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 40,
}

export const RootTab =  createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard
  },

  Shopping: {
    screen: Shopping
  },

  Archive: {
    screen: Archive,
  },

  Profile: {
    screen: Profile
  }
})

export const RootDrawer = createDrawerNavigator({
    Home: {
     screen: RootTab,
    },
  },
  {
    drawerWidth: width * 0.85,
  }
)

export const RootStack = createStackNavigator(
  {
    RootDrawer: RootDrawer
  },
  {
    headerMode: 'none',

  }
)