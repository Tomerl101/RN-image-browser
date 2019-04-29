import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { Image } from 'react-native-elements'
import styles from './styles'

export default function ImageCard(props) {
  const { uri, onPress } = props
  return (
    <TouchableOpacity style={styles.imageCardContainerStyle} onPress={onPress}>
      <Image
        source={{ uri }}
        style={styles.imageCardStyle}
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  )
}

ImageCard.propTypes = {
  onPress: PropTypes.func,
  uri: PropTypes.string
}
