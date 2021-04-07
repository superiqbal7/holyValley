import axios from 'axios'
import * as orderConstants from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderConstants.ORDER_CREATE_REQUEST
    })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(`/api/orders`, order, config)

    dispatch({
      type: orderConstants.ORDER_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error);
    dispatch(
      {
        type: orderConstants.ORDER_CREATE_FAIL, 
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      }
    )
  }
}
