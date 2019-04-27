import React from 'react'
import { Header, Button, Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

function MainHeader(props) {
  return (
    <Header
      placement="center"
      leftComponent={
        <Button
          onPress={() => props.navigation.goBack()}
          icon={<Icon name="arrow-back" color="white" />}
        />
      }
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'favorite', color: '#fff' }}
    />
  )
}

export default withNavigation(MainHeader)
