import data, { products } from '../../utils/data'
const initialState = {
  products: products,
  carts: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `ADD_TO_CART`:
      const itemInCart = state.carts.find((item) => item.id === payload)
      const newItemCart = state.products.find((item) => item.id === payload)
      if (!itemInCart) {
        return {
          ...state,
          carts: [...state.carts, newItemCart],
        }
      } else {
        return {
          ...state,
        }
      }
    default:
      return state
  }
}
