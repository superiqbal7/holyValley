import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProduct } from '../actions/productAction'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  //let pageNumber = match.params.pageNumber || 1
  const [pageNumber, setPageNumber] = useState(match.params.pageNumber || 1)

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList
  // if(products.length > 0) {
  //   setPageNumber(page)
  // }

  //fetch products for infiniteScroll
  const fetchMoreData = () => {
    //setPageNumber(page)
    if (page < pages){
      setPageNumber(page + 1)
    }
  }

  useEffect(() => {
    // if(products.length > 0){
    //   setPageNumber(page)
    // }
    dispatch(listProduct(keyword, page ? page + 1 : pageNumber, products))
  }, [dispatch, pageNumber])

  return (
    <div style={{overflow: 'hidden'}}>
    
        <Meta />
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
        )}
        <h1>Latest Products</h1>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
            : products.length > 0 && (
              <>
                <InfiniteScroll
                  dataLength={products.length}
                  next={fetchMoreData}
                  hasMore={page < pages ? true : true}
                  loader={page < pages ? <Loader /> : ''}
                  endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                style={{ overflow: 'hidden' }}
                >
                  <Row>
                    {products.map((product) => (
                      <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                        <Product product={product} />
                      </Col>
                    ))}
                  </Row>
                </InfiniteScroll>

                {/* <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              /> */}
              </>
            )

        }

      
    </div>
  )
}

export default HomeScreen
