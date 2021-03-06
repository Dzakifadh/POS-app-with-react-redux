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
    case `INCREMENT`:
      const originalPrice = state.products.find((item) => item.id === payload)
        .price
      const inCarts = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          }
        } else {
          return item
        }
      })
      return {
        ...state,
        carts: inCarts,
      }
    case `DECREMENT`:
      const oriPrice = state.products.find((item) => item.id === payload).price
      const deCarts = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price - oriPrice,
          }
        } else {
          return item
        }
      })
      return {
        ...state,
        carts: deCarts,
      }
    case `REMOVE_FROM_CART`:
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      }
    case `RESET_CART`:
      return {
        ...state,
        carts: [],
      }
    default:
      return state
  }
}
