import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, styles.monoTextStyle]} />
  }
}

MonoText.propTypes = {
  style: PropTypes.object
}

export default MonoText
