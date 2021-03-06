import React from 'react'
import { Icon } from 'expo'
import PropTypes from 'prop-types'
import styles from './styles'
import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={styles.tabBarIconStyle}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  name: PropTypes.string
}
