import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductCart(props) {
  const { addCart } = useContext(CartContext);
  const { id, name, price, image, description, slug } = props.data;

  return (
    <>
      <div className="productCard">
        <div>
          <Link to={slug}>
            <img width="100%" height={150} src={image} alt={name} />
          </Link>
        </div>
        <div>
          <p>{name}</p>
          <p>{price}</p>
          <button onClick={() => addCart(props.data)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
