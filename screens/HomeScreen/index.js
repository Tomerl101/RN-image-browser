import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { View } from 'react-native'
import GridViewScreen from './screens/GridView'
import ListViewScreen from './screens/ListView'
import MainHeader from '../../components/MainHeader'
import SearchBar from '../../components/SearchBar'

//Home screen contain two tabs in it
const HomeTabNavigator = createMaterialTopTabNavigator({
  'Grid View': GridViewScreen,
  'List View': ListViewScreen
})

HomeTabNavigator.navigationOptions = ({ navigation }) => ({
  header: props => (
    <View>
      <MainHeader />
      <SearchBar />
    </View>
  )
})

export default HomeTabNavigator
