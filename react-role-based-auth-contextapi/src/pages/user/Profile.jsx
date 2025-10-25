import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";


const Profile = () => {

    const {user, logout, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () =>{
       logout();
       navigate('/login'); 
    }
    if (!isAuthenticated) {
        return <p>Please log in to view your profile.</p>;  // Fallback UI when no user is logged in
    }

    return(
        <>
            <h1>Profile Page</h1>
            <h2>Hello {user.name}</h2>
            <h3>User Details</h3>
            <ul>
                <li><strong>Role</strong> {user.role}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Phone:</strong> {user.phone}</li>
            </ul>
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/settings'>settings</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Profile;