import React from 'react'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchImages } from '../redux/actions'
import PropTypes from 'prop-types'

import debounce from 'lodash/debounce'
class MySearchBar extends React.Component {
  state = {
    searchQuery: ''
  }

  handleUpdateSearch = searchQuery => {
    console.log('input->', searchQuery)
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

MySearchBar.propTypes = {
  onSearch: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: debounce(searchQuery => {
      dispatch(fetchImages(searchQuery))
    }, 500)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MySearchBar)
