import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Image, Button, Icon } from 'react-native-elements'
import MainHeader from '../components/MainHeader'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: () => <MainHeader />
  }

  render() {
    const { navigation } = this.props
    const imageId = navigation.getParam('id', 'NO-id')
    const imageUri = navigation.getParam('uri', 'NO-uri')

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <Image
          resizeMode="contain"
          source={{ uri: imageUri }}
          style={{ width: '100%', height: 400 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button
          type="clear"
          icon={<Icon raised name="favorite" color="#517fa4" reverse reverseColor="white" />}
        />
      </View>
    )
  }
}
