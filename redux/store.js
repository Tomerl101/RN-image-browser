import { createStore, applyMiddleware } from 'redux'
import combineReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(combineReducer, applyMiddleware(thunk))
export default store
