import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
            <header>
                <div className="row">
                    <a className="brand" href="/">TENET</a>
                </div>
                <div className="row">
                    <a href="/products">All Watches</a>
                    <a className = "row right" href="/cart">Cart</a>
                    <a className = "row right" href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                  {
                    data.products.map(product => (
                      <Product key={product._id} product={product}></Product>
                      ))
                  }
                </div>
            </main>
            <footer className="row center">All rights reserved. Tenet 2021.</footer>
        </div>
  );
}

export default App;
