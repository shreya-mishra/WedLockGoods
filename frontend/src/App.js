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
import ProductScreen from './components/screens/ProductScreen/ProductScreen';
import ProfileScreen from './components/screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';
import ShippingScreen from './components/screens/ShippingScreen/ShippingScreen';

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
          <Route path='/' component={Home} exact />


        </Container>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
