import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";

function ProductDetails() {
  const { products, addCart } = useContext(CartContext);
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  console.log(product);

  if (!product) {
    return <div>Product not found or still loading...</div>;
  }

  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} width={300} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addCart(product)}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductDetails;
