import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ImageCard from '../../../components/ImageCard'
import EmptyState from '../../../components/EmptyState'

class GridViewScreen extends React.Component {
  handleOnPress = ({ id, webformatURL }) =>
    this.props.navigation.navigate('ImageScreen', { id, uri: webformatURL })

  keyExtractor = item => item.id

  renderItem = ({ item }) => (
    <ImageCard uri={item.webformatURL} onPress={() => this.handleOnPress(item)} />
  )

  render() {
    const { images } = this.props.data
    return images && images.hits.length > 0 ? (
      <FlatList
        data={images.hits}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={3}
      />
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
