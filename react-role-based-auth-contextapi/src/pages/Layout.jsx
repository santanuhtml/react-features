import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(){
    return(
        <> 
            <div className="container mx-auto">
                <Header />
                <Outlet />
                <br />
                <Footer />
            </div>
        </>
    )
}

export default Layout;