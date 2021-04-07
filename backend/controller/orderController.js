import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })
    console.log(order);

    const createdOrderRequest = await order.save()
    console.log(createdOrderRequest);

    res.status(201).json(createdOrderRequest)
  }
})

export { addOrderItems }
