import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/screens/Home/Home';
import ProductScreen from './components/screens/ProductScreen/ProductScreen';

function App() {
  return (
    <Router>

      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductScreen} exact />

        </Container>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
