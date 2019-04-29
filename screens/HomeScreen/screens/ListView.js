import React from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import EmptyState from '../../../components/EmptyState'
import PropTypes from 'prop-types'
import styles from '../../styles'
import colors from '../../../constants/Colors'
class GridViewScreen extends React.Component {
  handleOnPress = ({ id, webformatURL }) =>
    this.props.navigation.navigate('ImageScreen', { id, uri: webformatURL })

  render() {
    const { images } = this.props.data
    return images.hits && images.hits.length > 0 ? (
      <ScrollView>
        {this.props.data.images.hits.map(item => (
          <TouchableOpacity key={item.id} onPress={() => this.handleOnPress(item)}>
            <ListItem
              leftAvatar={{ source: { uri: item.previewURL } }}
              title={item.tags.toUpperCase()}
              titleStyle={styles.titleStyle}
              subtitle={
                <View style={styles.subTitleContainerStyle}>
                  <Icon name="visibility" size={14} color="grey" />
                  <Text style={styles.subTitleTextStyle}>{`${item.views}`}</Text>
                  <Icon type="ionicon" name="md-thumbs-up" size={14} color="grey" />
                  <Text style={styles.subTitleTextStyle}>{`${item.likes}`}</Text>
                </View>
              }
              subtitleStyle={{ color: colors.GREY }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    ) : (
      <EmptyState />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

GridViewScreen.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object
}

export default connect(
  mapStateToProps,
  null
)(GridViewScreen)
