import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './components/screens/CartScreen/CartScreen';
import Home from './components/screens/Home/Home';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import OrderScreen from './components/screens/OrderScreen/OrderScreen';
import PaymentScreen from './components/screens/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen/PlaceOrderScreen';
import ProductListScreen from './components/screens/ProductListScreen/ProductListScreen';
import ProductScreen from './components/screens/ProductScreen/ProductScreen';
import ProfileScreen from './components/screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';
import ShippingScreen from './components/screens/ShippingScreen/ShippingScreen';
import UserEditScreen from './components/screens/UserEditScreen.js/UserEditScreen';
import UserListScreen from './components/screens/UserListScreen/UserListScreen';

function App() {
  return (
    <Router>

      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/shipping' component={ShippingScreen} exact />
          <Route path='/payment' component={PaymentScreen} exact />
          <Route path='/placeOrder' component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen} />

          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path="/admin/userList" component={UserListScreen} />
          <Route path="/admin/productList" component={ProductListScreen} />

          <Route path="/admin/user/:id" component={UserEditScreen} />
          <Route path='/' component={Home} exact />


        </Container>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
