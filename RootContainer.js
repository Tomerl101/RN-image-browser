import React from 'react'
import { AsyncStorage, Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { connect } from 'react-redux'
import AppNavigator from './navigation/AppNavigator'
import { hydrateFavoriteImages, fetchImages } from './redux/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

class RootContainer extends React.Component {
  state = {
    isLoadingComplete: false
  }

  async componentWillMount() {
    const { doHydrateFavoriteImages, onSearch } = this.props
    let favoriteImages = await AsyncStorage.getItem('favImagesListV2')
    if (!favoriteImages) {
      favoriteImages = []
    } else {
      favoriteImages = JSON.parse(favoriteImages)
    }
    onSearch('')
    doHydrateFavoriteImages(favoriteImages)
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    )
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  handleLoadingError = error => {
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doHydrateFavoriteImages: favoriteImages => {
      dispatch(hydrateFavoriteImages(favoriteImages))
    },
    onSearch: searchQuery => {
      dispatch(fetchImages(searchQuery))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RootContainer)
