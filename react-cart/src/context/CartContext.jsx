import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the CartContext
const CartContext = createContext();

// CartProvider component to manage cart state
const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  

  // cartLength is just a derived value from cart state
  const cartLength = cart.length;

        

  // Function to add items to the cart
  const addCart = (item) => {
    let isPresent = false;
    
    // Check if the item is already in the cart
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } else {
      let newCart = [...cart, item];
      let newPrice = newCart.reduce((sum, item) => sum + item.price * item.amount, 0);
      setCart(newCart);
      setPrice(newPrice);
     
    }
  };

  // Function to change item amount in the cart
  const handleChange = (id, change) => {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        item.amount = item.amount + change;
      }
      return item;
    });

    // Remove items with amount 0
    newCart = newCart.filter((item) => item.amount !== 0);
    let newPrice = newCart.reduce((sum, item) => sum + item.price * item.amount, 0);
    setCart(newCart);
    setPrice(newPrice);
  };

  // Function to delete item from the cart
  const handleDelete = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    let newPrice = newCart.reduce((sum, item) => sum + item.price * item.amount, 0);

    //After delete item reset item amount to 1
    let removedItem = cart.filter((item) => item.id == id);
    removedItem.map((item)=> item.amount = 1);
   
    setCart(newCart);
    setPrice(newPrice);
  };

  // Fetching products data
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  return (
    <CartContext.Provider value={{ products, cartLength, addCart, cart, setCart, show, price, handleChange, handleDelete }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
