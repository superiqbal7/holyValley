import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import * as screens from './screens'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/login' component={screens.LoginScreen} />
          <Route path='/placeorder' component={screens.PlaceOrderScreen} />
          <Route path='/order/:id' component={screens.OrderScreen} />
          <Route path='/payment' component={screens.PaymentScreen} />
          <Route path='/shipping' component={screens.ShippingScreen} />
          <Route path='/register' component={screens.RegisterScreen} />
          <Route path='/profile' component={screens.ProfileScreen} />
          <Route path='/product/:id' component={screens.ProductScreen}/>
          <Route path='/cart/:id?' component={screens.CartScreen} />
          <Route path='/admin/userlist' component={screens.UserListScreen} />
          <Route path='/admin/user/:id/edit' component={screens.UserEditScreen} />
          <Route path='/admin/productlist' component={screens.ProductListScreen} exact/>
          <Route path='/admin/productlist/:pageNumber' component={screens.ProductListScreen} exact/>
          <Route path='/admin/product/:id/edit' component={screens.ProductEditScreen} />
          <Route path='/admin/orderlist' component={screens.OrderListScreen} />

          <Route path='/search/:keyword' component={screens.HomeScreen} exact />
          <Route path='/page/:pageNumber' component={screens.HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={screens.HomeScreen}
            exact
          />
          <Route path='/' component={screens.HomeScreen} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
