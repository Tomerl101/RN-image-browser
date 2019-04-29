import 'react-native'
import React from 'react'
import App from '../App'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'
import MainHeader from '../components/MainHeader'

describe('App snapshot', () => {
  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the root without loading screen', async () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should not show back button on header', function() {
    const navigation = { state: { routeName: 'HomeScreen' } }
    const testRenderer = renderer.create(<MainHeader navigation={navigation} />)
    expect(testRenderer.root.props.leftComponent).toBeNull()
  })
})
