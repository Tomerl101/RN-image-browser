import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ImageCard from '../../../components/ImageCard'

class GridViewScreen extends React.Component {
  handleOnPress = () => this.props.navigation.navigate('ImageScreen')

  keyExtractor = item => item.id

  renderItem = ({ item }) => <ImageCard uri={item.webformatURL} onPress={this.handleOnPress} />

  render() {
    return (
      <FlatList
        data={this.props.data.images.hits}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={3}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: id => {
//       dispatch(deleteBookmark(id))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  null
)(GridViewScreen)
