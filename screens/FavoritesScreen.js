import React from 'react'
import { AsyncStorage, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ImageCard from '../components/ImageCard'
import EmptyState from '../components/EmptyState'
import MainHeader from '../components/MainHeader'

class FavoriteScreen extends React.Component {
  static navigationOptions = {
    header: () => <MainHeader />
  }

  state = {
    favoriteImages: []
  }
  async componentDidMount() {
    try {
      let favImagesList = await AsyncStorage.getItem('favImagesList')
      favImagesList = JSON.parse(favImagesList)
      this.setState({ favoriteImages: favImagesList })
    } catch {
      console.log('ERROR')
    }
  }

  handleOnPress = item => this.props.navigation.navigate('ImageScreen', { uri: item })

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => <ImageCard uri={item} onPress={() => this.handleOnPress(item)} />

  render() {
    const { favoriteImages } = this.state
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
    data: state
  }
}

export default connect(
  mapStateToProps,
  null
)(FavoriteScreen)
