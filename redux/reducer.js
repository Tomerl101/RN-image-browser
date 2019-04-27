import dummyData from '../dummyData'

import { FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR } from './actionsType'

const initialState = {
  images: dummyData,
  loading: false,
  error: ''
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_START: {
      return {
        ...state,
        loading: true,
        error: ''
      }
    }
    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false
      }
    }
    case FETCH_IMAGES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
