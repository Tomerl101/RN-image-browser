import React from 'react'
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { Image, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import find from 'lodash/find'
import { hydrateFavoriteImages } from '../redux/actions'
import MainHeader from '../components/MainHeader'
import PropTypes from 'prop-types'
import styles from './styles'
class ImageScreen extends React.Component {
  static navigationOptions = {
    header: () => <MainHeader />
  }

  isFavoriteImage(imageId) {
    const { favoriteImages } = this.props.state
    return !!find(favoriteImages, { id: imageId })
  }

  handleOnLikePress = async () => {
    const { addImageToFavorites } = this.props
    const { favoriteImages } = this.props.state
    const imageUri = this.props.navigation.getParam('uri')
    const imageId = this.props.navigation.getParam('id')
    favoriteImages.push({ id: imageId, uri: imageUri })
    addImageToFavorites(favoriteImages)
    alert('Image added to favorites')
    try {
      //persist data
      await AsyncStorage.setItem('favImagesListV2', JSON.stringify(favoriteImages))
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    const { navigation } = this.props
    const imageUri = navigation.getParam('uri', 'NO-uri')
    const imageId = this.props.navigation.getParam('id')

    return (
      <View style={styles.imageScreenContainerStyle}>
        <Image
          resizeMode="contain"
          source={{ uri: imageUri }}
          style={styles.imageScreenImageStyle}
          PlaceholderContent={<ActivityIndicator />}
        />
        {!this.isFavoriteImage(imageId) && (
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

ImageScreen.propTypes = {
  navigation: PropTypes.object,
  state: PropTypes.object,
  favoriteImages: PropTypes.array,
  addImageToFavorites: PropTypes.func
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
