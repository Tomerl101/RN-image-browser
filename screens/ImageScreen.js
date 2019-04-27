import React from 'react'
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { Image, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { hydrateFavoriteImages } from '../redux/actions'
import MainHeader from '../components/MainHeader'

class ImageScreen extends React.Component {
  static navigationOptions = {
    header: () => <MainHeader />
  }

  handleOnLikePress = async () => {
    const { addImageToFavorites } = this.props
    const { favoriteImages } = this.props.state
    const imageUri = this.props.navigation.getParam('uri')
    const imageId = this.props.navigation.getParam('id')
    favoriteImages.push({ id: imageId, uri: imageUri })
    addImageToFavorites(favoriteImages)
    try {
      //persist data
      await AsyncStorage.setItem('favImagesListV2', JSON.stringify(favoriteImages))
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    const { navigation } = this.props
    const isFavorite = navigation.getParam('isFavorite')
    const imageUri = navigation.getParam('uri', 'NO-uri')

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <Image
          resizeMode="contain"
          source={{ uri: imageUri }}
          style={{ width: '100%', height: 400 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        {!isFavorite && (
          <Button
            type="clear"
            onPress={this.handleOnLikePress}
            icon={<Icon raised name="favorite" color="#517fa4" reverse reverseColor="white" />}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addImageToFavorites: favoriteImage => {
      dispatch(hydrateFavoriteImages(favoriteImage))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageScreen)
