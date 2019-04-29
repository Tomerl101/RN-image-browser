import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  emptyStateTextStyle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 24
  },
  imageCardContainerStyle: {
    backgroundColor: '#eee',
    height: 180,
    flex: 1,
    borderRadius: 5,
    margin: 5
  },
  imageCardStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  monoTextStyle: {
    fontFamily: 'space-mono'
  },
  tabBarIconStyle: {
    marginBottom: -3
  }
})

export default styles
