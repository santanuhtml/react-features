import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
import ProductCart from "../component/ProductCart.jsx";

function Home() {
  const { products } = useContext(CartContext);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((item) => (
            <ProductCart key={item.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
