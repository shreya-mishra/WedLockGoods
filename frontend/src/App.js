import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartScreen from "./components/screens/CartScreen/CartScreen";
import Home from "./components/screens/Home/Home";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import OrderListScreen from "./components/screens/OrderListScreen/OrderListScreen";
import OrderScreen from "./components/screens/OrderScreen/OrderScreen";
import PaymentScreen from "./components/screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen/PlaceOrderScreen";
import ProductEditScreen from "./components/screens/ProductEditScreen";
import ProductListScreen from "./components/screens/ProductListScreen/ProductListScreen";
import ProductScreen from "./components/screens/ProductScreen/ProductScreen";
import ProfileScreen from "./components/screens/ProfileScreen/ProfileScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";
import ShippingScreen from "./components/screens/ShippingScreen/ShippingScreen";
import UserEditScreen from "./components/screens/UserEditScreen.js/UserEditScreen";
import UserListScreen from "./components/screens/UserListScreen/UserListScreen";

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
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route
            path='/admin/productList'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productList/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/user/:id' component={UserEditScreen} />
          <Route path='/search/:keyword' component={Home} exact />
          <Route path='/page/:pageNumber' component={Home} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={Home}
            exact
          />
          <Route path='/' component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
