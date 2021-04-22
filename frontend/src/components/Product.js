import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { addToCart, removeFromCart } from '../actions/cartActions'

const Product = ({ product, history }) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  // useEffect(() => {

  // }, [dispatch, product._id, quantity])
  
  // const addToCartHandler = () => {
  //   //history.push(`/cart/${product.id}?quantity=${quantity}`)
  //   if (product._id) {
  //     dispatch(addToCart(product._id, quantity))
  //   }
  // }

  return (
    <Card className='my-3 p-2 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          {/* <div className='my-3'>{product.rating} from {product.numReviews}</div> */}
          <Rating 
            value={product.rating} 
            text={`${product.numReviews} reviews`} 
          />
        </Card.Text>
        <Card.Text as='h6'>৳{product.price}</Card.Text>
        {/* <Button
          onClick={addToCartHandler}
          className='btn-block'
          type='button'
          variant="outline-primary"
          disabled={product.countInStock === 0}
        >
          Add To Cart
        </Button> */}
      </Card.Body>
    </Card>
  )
}

export default Product
