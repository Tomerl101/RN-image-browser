import {
  LIKE_IMAGE,
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from './actionsType'

export const likeImage = payload => ({
  type: LIKE_IMAGE,
  payload
})

export function fetchImages(query) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_IMAGES_START
    })
    try {
      const result = await doFetchImages(query)
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: FETCH_IMAGES_ERROR,
        error: err
      })
    }
  }
}
