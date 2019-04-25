import { createMaterialTopTabNavigator } from 'react-navigation'
import ScreenOne from './HomeScreen/screens/one'
import ScreenTwo from './HomeScreen/screens/two'

const TabNavigatior = createMaterialTopTabNavigator(
  {
    noa: ScreenOne,
    Tomer: ScreenTwo
  },
  {
    // tabBarOptions: {
    //   labelStyle: {
    //     fontSize: 12
    //   },
    //   tabStyle: {
    //     width: 100
    //   },
    //   style: {
    //     backgroundColor: 'blue'
    //   }
    // }
  }
)

export default TabNavigatior
