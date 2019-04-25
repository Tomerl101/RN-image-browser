import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import B from '../screens/LinksScreen'
import MySearchBar from '../components/SearchBar'

const LinksStack = createStackNavigator({
  A: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `A`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
      header: props => <MySearchBar {...props} />,
      headerStyle: {
        backgroundColor: 'transparent'
      }
    })
  },
  B
})

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
  header: null
}

export default LinksStack
// export default createBottomTabNavigator({
//   HomeScreen,
//   LinksStack
//   // SettingsStack
// })
