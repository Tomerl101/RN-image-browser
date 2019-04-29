import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageScreenContainerStyle: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  imageScreenImageStyle: {
    width: '100%',
    height: 400
  },
  subTitleContainerStyle: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  subTitleTextStyle: { marginLeft: 6, marginRight: 14, color: 'grey' },
  titleStyle: { fontSize: 14 }
})

export default styles
