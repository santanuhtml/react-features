import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Layout from "./component/Layout";

import { useState } from "react";


function App(){
  
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);


  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/:slug" element={<Details />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;