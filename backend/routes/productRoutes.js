import express from 'express'
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import { 
  getProducts, 
  getProductById, 
  deleteProduct,
  createProduct,
  updateProduct
} from '../controller/productController.js'

const router = express.Router()

router
  .route('/')
  .get(getProducts)
  .post(protect, isAdmin, createProduct)


router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct)


export default router
