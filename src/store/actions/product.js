export const addCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: id,
  }
}

export const inc = (id) => {
  return {
    type: 'INCREMENT',
    payload: id,
  }
}

export const dec = (id) => {
  return {
    type: 'DECREMENT',
    payload: id,
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  }
}
