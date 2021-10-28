import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

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
