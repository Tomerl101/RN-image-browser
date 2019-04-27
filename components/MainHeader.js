import React from 'react'
import { Header, Button, Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

function MainHeader(props) {
  return (
    <Header
      placement="center"
      leftComponent={
        props.navigation.state.routeName == 'HomeScreen' ? null : (
          <Button
            onPress={() => props.navigation.goBack()}
            icon={<Icon name="arrow-back" color="white" />}
          />
        )
      }
      centerComponent={{ text: 'IMAGE BROWSER', style: { color: '#fff' } }}
      rightComponent={
        <Button
          onPress={() => props.navigation.navigate('FavoritesScreen')}
          icon={<Icon name="bookmark" color="white" />}
        />
      }
    />
  )
}

export default withNavigation(MainHeader)
