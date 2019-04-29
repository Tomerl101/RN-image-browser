import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux/reducer'
import thunk from 'redux-thunk'
import { hydrateFavoriteImages, fetchImages } from '../redux/actions'
import { HYDRATE_FAVORITE_IMAGES } from '../redux/actionsType'

describe('image browser redux e2e functionality', function() {
  test('hydrate favorite images to state from async storage', function() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    expect(store.getState().favoriteImages).toHaveLength(0)
    store.dispatch(hydrateFavoriteImages([{ id: 1, uri: 'test.com' }]))

    expect(store.getState().favoriteImages).toHaveLength(1)
  })

  test('add image to favorites', async function() {
    const store = createStore(rootReducer, applyMiddleware(thunk))

    await store.dispatch(fetchImages('dogs'))
    expect(store.getState().images.hits).toHaveLength(20)
  })

  test('should create an action to hydrate favorite images', () => {
    const expectedAction = {
      type: HYDRATE_FAVORITE_IMAGES,
      payload: []
    }
    expect(hydrateFavoriteImages([])).toEqual(expectedAction)
  })
})
