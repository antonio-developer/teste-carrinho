import './Product.css';

export default function Produto(props) {
  return (
    <div className="product">
      <div className="product__img">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="product__info">
        <h3>{props.name}</h3>
        <p className="product__price">
          R$ {(props.price / 100).toString().replace(/\./, ',')}
        </p>
        <p className="product__selling-price">
          R$ {(props.sellingPrice / 100).toString().replace(/\./, ',')}
        </p>
      </div>
    </div>
  );
}
