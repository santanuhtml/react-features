import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function AuthGuard(){
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
        navigate("/login");
        }
    }, [user, navigate]);

    // Only render Outlet if user exists
    if (!user) return <p>Redirecting...</p>;

    return(
        <>
            <Outlet />
        </>
    )
}

export default AuthGuard;