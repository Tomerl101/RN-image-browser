import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
  HYDRATE_FAVORITE_IMAGES
} from './actionsType'

import fetchImagesRequest from '../service/fetchImages'

//get favorite images from asyncStorage
export const hydrateFavoriteImages = favoriteImages => ({
  type: HYDRATE_FAVORITE_IMAGES,
  payload: favoriteImages
})

export function fetchImages(searchQuery) {
  console.log('fetch->', searchQuery)
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
