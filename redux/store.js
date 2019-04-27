import { createStore } from 'redux'
import combineReducer from './reducer'

const store = createStore(combineReducer)
export default store
