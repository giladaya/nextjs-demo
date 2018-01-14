import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import counter2 from './modules/redux_app2/state/reducer'

const rootReducer = combineReducers({
  counter2,
});

export const initStore = (initialState, options) => {
  console.log('is server', options.isServer);
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))
}
