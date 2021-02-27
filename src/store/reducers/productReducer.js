import data, { products } from '../../utils/data'
const initialState = {
  products: products,
  carts: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //   return { ...state, ...payload }

    default:
      return state
  }
}
