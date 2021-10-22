import Product from './components/Product';
import data from './data';

function App() {
  return (
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
