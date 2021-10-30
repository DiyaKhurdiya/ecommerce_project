import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SearchBox from './components/SearchBox';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header>
                <div className="brand">
                    <Link className="brand" to="/">TENET</Link>
                </div>
                
                <div className="navigation">
                    <Link className="category" to="/products">WATCHES</Link>
                    <Link className="category" to="/products">JEWELRY</Link>
                    <Link className="category" to="/products">BESTSELLERS</Link>
                    <Link className="category" to="/products">TODAY'S DEALS</Link>
                    <div>
                      <Link className="side" to="/cart">Cart
                      {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                      )}
                      </Link>
                      <Link className="side" to="/signin">Sign In</Link>                       
                    </div>
                </div>
                <br></br>
                <div>
                    <Route
                      render={({ history }) => (
                        <SearchBox history={history}></SearchBox>
                      )}
                    ></Route>
                </div>
            </header>
            <main>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">All rights reserved. Tenet 2021.</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
