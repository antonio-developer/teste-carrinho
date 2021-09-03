export default function Produto(props) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="product-info">
        <h3>{props.name}</h3>
        <p className="price">
          R$ {(props.price / 100).toString().replace(/\./, ',')}
        </p>
        <p className="selling-price">
          R$ {(props.sellingPrice / 100).toString().replace(/\./, ',')}
        </p>
      </div>
    </div>
  );
}
