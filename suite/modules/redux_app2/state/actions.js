export const actionTypes = {
  ADD: 'ADD',
  SET: 'SET'
}

export const setCount = (value = 0) => ({
  type: actionTypes.SET,
  payload: value,
})

export const addCount = (delta = 1) => ({
  type: actionTypes.ADD,
  payload: delta,
})
