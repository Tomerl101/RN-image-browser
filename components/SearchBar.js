import React from 'react'
import { SearchBar } from 'react-native-elements'

export default class MySearchBar extends React.Component {
  state = {
    search: ''
  }

  handleUpdateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { search } = this.state

    return (
      <SearchBar
        round
        lightTheme
        placeholder="Type Here..."
        onChangeText={this.handleUpdateSearch}
        value={search}
      />
    )
  }
}
