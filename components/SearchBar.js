import React from 'react'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchImages } from '../redux/actions'

class MySearchBar extends React.Component {
  state = {
    searchQuery: ''
  }

  handleUpdateSearch = searchQuery => {
    this.setState({ searchQuery })
    this.props.onSearch(searchQuery)
  }

  render() {
    const { searchQuery } = this.state

    return (
      <SearchBar
        round
        lightTheme
        placeholder="Search Here..."
        onChangeText={this.handleUpdateSearch}
        value={searchQuery}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: searchQuery => {
      dispatch(fetchImages(searchQuery))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MySearchBar)
