import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ImageCard from '../../../components/ImageCard'
import EmptyState from '../../../components/EmptyState'
import PropTypes from 'prop-types'

class GridViewScreen extends React.Component {
  handleOnPress = ({ id, webformatURL }) => {
    this.props.navigation.navigate('ImageScreen', { id, uri: webformatURL })
  }

  keyExtractor = item => item.id

  renderItem = ({ item }) => {
    const uri = item.webformatURL.replace('_640,_180')
    return <ImageCard uri={uri} onPress={() => this.handleOnPress(item)} />
  }

  render() {
    const { images } = this.props.data
    return images.hits && images.hits.length > 0 ? (
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

GridViewScreen.propTypes = {
  navigation: PropTypes.object
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
