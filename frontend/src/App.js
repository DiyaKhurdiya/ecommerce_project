import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header>
                <div className="brand">
                    <a className="brand" href="/">TENET</a>
                </div>
                <div className="navigation">
                    <a className="category" href="/products">WATCHES</a>
                    <a className="category" href="/products">JEWELRY</a>
                    <a className="category" href="/products">BESTSELLERS</a>
                    <a className="category" href="/products">TODAY'S DEALS</a>
                    <div>
                      <a className="side" href="/cart">Cart</a>
                      <a className="side" href="/signin">Sign In</a>                       
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
