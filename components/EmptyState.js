import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export default function EmptyState() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <Icon type="ionicon" name="ios-images" color="grey" size={202} />
      <Text style={{ textAlign: 'center', color: 'grey' }}>
        {`No result
were found`}
      </Text>
    </View>
  )
}
