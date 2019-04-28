import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import EmptyState from '../../../components/EmptyState'

class GridViewScreen extends React.Component {
  handleOnPress = ({ id, webformatURL }) =>
    this.props.navigation.navigate('ImageScreen', { id, uri: webformatURL })

  render() {
    const { images } = this.props.data
    return images.hits && images.hits.length > 0 ? (
      <ScrollView>
        {this.props.data.images.hits.map(item => (
          <TouchableOpacity key={item.id} onPress={() => this.handleOnPress(item)}>
            <ListItem
              leftAvatar={{ source: { uri: item.previewURL } }}
              title={item.tags}
              subtitle={`Views ${item.views} Likes:${item.likes}`}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    ) : (
      <EmptyState />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(
  mapStateToProps,
  null
)(GridViewScreen)
