// import dummyData from '../dummyData'

import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
  HYDRATE_FAVORITE_IMAGES
} from './actionsType'

const initialState = {
  images: [],
  favoriteImages: [],
  isLoading: false,
  error: ''
}
export default function reducer(state = initialState, action) {
  console.log('in reducer->', action.type)
  switch (action.type) {
    case FETCH_IMAGES_START: {
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    }
    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        images: action.payload,
        isLoading: false
      }
    }
    case FETCH_IMAGES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case HYDRATE_FAVORITE_IMAGES: {
      return {
        ...state,
        favoriteImages: action.payload
      }
    }
    default: {
      return state
    }
  }
}
