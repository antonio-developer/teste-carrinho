import './App.css';
import acima10Reais from './services/acima-10-reais.json';
import abaixo10Reais from './services/abaixo-10-reais.json';
import Product from './components/Product';

function App() {
  const { items } = abaixo10Reais;
  console.log(items[0].name);

  var total = items.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + item.price + item.sellingPrice;
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <main>
          {items.map(item => (
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
              R$ {(total / 100).toString().replace(/\./, ',')}
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
