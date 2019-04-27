import React from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

class GridViewScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        {this.props.data.images.hits.map(item => (
          <ListItem
            key={item.id}
            leftAvatar={{ source: { uri: item.previewURL } }}
            title={item.tags}
            subtitle={`Views ${item.views} Likes:${item.likes}`}
          />
        ))}
      </ScrollView>
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
