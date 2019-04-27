import {
  LIKE_IMAGE,
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from './actionsType'

import fetchImagesRequest from '../service/fetchImages'

export const likeImage = payload => ({
  type: LIKE_IMAGE,
  payload
})

export function fetchImages(searchQuery) {
  return async dispatch => {
    dispatch({
      type: FETCH_IMAGES_START
    })
    try {
      const { data } = await fetchImagesRequest(searchQuery)
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: FETCH_IMAGES_ERROR,
        error: err
      })
    }
  }
}
