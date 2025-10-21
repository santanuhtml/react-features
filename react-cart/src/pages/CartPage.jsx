import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
    const { cart, price, handleChange, handleDelete, cartLength } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            
            {/* If the cart is empty */}
            {cartLength === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="btn-primary">Continue Shopping</Link>
                </div>
            ) : (
                <>
                    {/* Cart items */}
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <img src={item.image} alt={item.name} width={100} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <div className="item-quantity">
                                    <button onClick={() => handleChange(item.id, -1)}>-</button>
                                    <span>{item.amount}</span>
                                    <button onClick={() => handleChange(item.id, +1)}>+</button>
                                </div>

                                <div className="item-price">
                                    <p>${item.price}</p>
                                </div>

                                <div className="remove-item">
                                    <button onClick={() => handleDelete(item.id)} className="remove-btn">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total price */}
                    <div className="cart-summary">
                        <h3>Total Price: ${price}</h3>
                        <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;
