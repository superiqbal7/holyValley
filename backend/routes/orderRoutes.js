import express from 'express'
import {
  addOrderItems,
  gerOrderById,
  updateOrderToPaid
} from '../controller/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)

router.route('/:id').get(protect, gerOrderById)

router.route('/:id/pay').put(protect, updateOrderToPaid)


export default router
