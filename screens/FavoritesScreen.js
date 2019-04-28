import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ImageCard from '../components/ImageCard'
import EmptyState from '../components/EmptyState'
import MainHeader from '../components/MainHeader'

class FavoriteScreen extends React.Component {
  static navigationOptions = {
    header: () => <MainHeader />
  }

  handleOnPress = item =>
    this.props.navigation.navigate('ImageScreen', { id: item.id, uri: item.uri })

  keyExtractor = item => `${item.id}`

  renderItem = ({ item }) => {
    return <ImageCard uri={item.uri} onPress={() => this.handleOnPress(item)} />
  }
  render() {
    const { favoriteImages } = this.props.state
    return favoriteImages && favoriteImages.length > 0 ? (
      <FlatList
        data={favoriteImages}
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
    state
  }
}

export default connect(
  mapStateToProps,
  null
)(FavoriteScreen)
