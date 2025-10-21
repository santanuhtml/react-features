import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


function Header() {
    const { user } = useContext(AuthContext);
    // console.log("Header User:", user);

    return (
        <>
            <ul style={{ display: "flex", gap: 20, listStyleType: "none" }}>
                <li>
                    <NavLink to="/" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                        about
                    </NavLink>
                </li>
               

                {user && (
                    <>
                        <li>
                            <NavLink to="/profile" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                                Profile Settings
                            </NavLink>
                        </li>
                    </>
                )}
                 {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                                Signup
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
            <style>
                {
                    `
                    .text-red{
                    color:#f00;
                    }
                    `
                }
            </style>

        </>
    )
}

export default Header;