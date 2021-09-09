import { useState, useEffect } from 'react';
import './App.css';
import acima10Reais from './services/acima-10-reais.json';
import abaixo10Reais from './services/abaixo-10-reais.json';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { items } = abaixo10Reais;
    setProducts(items);
  }, []);

  var total = products.reduce(getTotal, 0);
  function getTotal(total, product) {
    return total + product.price + product.sellingPrice;
  }

  return (
    <div className="App">
      <header>
        <h1>Meu carrinho</h1>
      </header>

      <main>
        {products.map(product => (
          <div key={product.uniqueId}>
            <Product
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              sellingPrice={product.sellingPrice}
            />
          </div>
        ))}
      </main>

      <footer>
        <div className="total">
          <span className="result">Total</span>
          <span className="result">
            R${' '}
            {parseFloat(total / 100)
              .toFixed(2)
              .replace('.', ',')}
          </span>
        </div>

        {total < 1000 ? null : (
          <div className="msg">
            <span>Parabéns, sua compra tem frete grátis!</span>
          </div>
        )}

        <div className="btn">
          <button type="submit">Finalizar compra</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
