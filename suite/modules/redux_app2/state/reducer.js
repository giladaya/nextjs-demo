import {actionTypes} from './actions'

export const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET:
      return Object.assign({}, state, {
        count: parseInt(action.payload, 10)
      })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + parseInt(action.payload, 10)
      })
    default: return state
  }
}
export default reducer
