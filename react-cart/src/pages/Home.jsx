
import ProductCart from "../component/ProductCart";
import ProductList from "../component/ProductList";
import { useEffect } from "react";
import axios from "axios";
function Home(){
    useEffect(()=>{
        axios.get(`http://localhost:3000/products`)
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
        })
    }, [])
    return(
        <>
            
            <ProductCart />
        </>
    )
}
export default Home;