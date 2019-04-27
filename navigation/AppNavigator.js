import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeTabNavigator from '../screens/HomeScreen'
import ImageScreen from '../screens/ImageScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

const MainStackNavigator = createStackNavigator({
  HomeScreen: HomeTabNavigator,
  ImageScreen,
  FavoritesScreen
})

export default createAppContainer(MainStackNavigator)
