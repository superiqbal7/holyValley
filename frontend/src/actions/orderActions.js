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

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderConstants.ORDER_DETAILS_REQUEST
    })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/orders/${id}`, config)

    dispatch({
      type: orderConstants.ORDER_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error);
    dispatch(
      {
        type: orderConstants.ORDER_DETAILS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      }
    )
  }
}

export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: orderConstants.ORDER_PAY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    )

    dispatch({
      type: orderConstants.ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: orderConstants.ORDER_PAY_FAIL,
      payload: message,
    })
  }
}

export const listUserOrders = () => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: orderConstants.ORDER_LIST_USER_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/orders/myorders`,
      config
    )

    dispatch({
      type: orderConstants.ORDER_LIST_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: orderConstants.ORDER_LIST_USER_FAIL,
      payload: message,
    })
  }
}
