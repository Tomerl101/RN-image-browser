import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

export default function ImageCard(props) {
  const { uri, onPress } = props
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#eee', height: 200, flex: 1, borderRadius: 5, margin: 5 }}
      onPress={onPress}
    >
      <Image
        source={{ uri }}
        style={{ height: '100%', width: '100%', borderRadius: 5 }}
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  )
}
