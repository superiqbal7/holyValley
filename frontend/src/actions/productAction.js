import axios from 'axios'
import * as productConstants from '../constants/productConstants.js'

export const listProduct = () => async (dispatch) => {
  try {
    dispatch(
      {
        type: productConstants.PRODUCT_LIST_REQUEST
      }
    )
    const { data } = await axios.get('/api/products')

    dispatch(
      {
        type: productConstants.PRODUCT_LIST_SUCCESS,
        payload: data
      }
    )
  } catch (error) {
      dispatch(
        {
          type: productConstants.PRODUCT_LIST_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
        }
      )
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(
      {
        type: productConstants.PRODUCT_DETAILS_REQUEST
      }
    )
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(
      { 
        type: productConstants.PRODUCT_DETAILS_SUCCESS,
        payload: data
      }
    )
  } catch (error) {
    dispatch(
      {
        type: productConstants.PRODUCT_DETAILS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      }
    )
  }
}
