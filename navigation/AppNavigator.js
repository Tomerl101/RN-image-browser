import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeTabNavigator from '../screens/HomeScreen'
import ImageScreen from '../screens/ImageScreen'

const MainStackNavigator = createStackNavigator({
  HomeScreen: HomeTabNavigator,
  ImageScreen
})

export default createAppContainer(MainStackNavigator)
