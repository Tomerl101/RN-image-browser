import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

export default function EmptyState() {
  return (
    <View style={styles.emptyStateContainer}>
      <Icon type="ionicon" name="ios-images" color="grey" size={202} />
      <Text style={styles.emptyStateTextStyle}>
        {`No result
were found`}
      </Text>
    </View>
  )
}
