import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./component/Layout";
import './assets/css/custom.css';
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/:slug" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
     
    </>
  );
}

export default App;
