import axios from 'axios'
import * as cartConstants from '../constants/cartConstants.js'

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: cartConstants.CART_ADD_ITEM,
    payload: { 
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
