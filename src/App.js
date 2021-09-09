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
      <div className="container">
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <main>
          {products.map(item => (
            <div key={item.uniqueId}>
              <Product
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                sellingPrice={item.sellingPrice}
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
    </div>
  );
}

export default App;
