import React from 'react'
import { View, Text } from 'react-native'
import MainHeader from '../components/MainHeader'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: () => (
      <View>
        <MainHeader />
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text>Change this text and your app will automatically reload.</Text>
      </View>
    )
  }
}
