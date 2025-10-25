import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";



function Header() {
    const { isAuthenticated, hasRole } = useContext(AuthContext);

    return (
        <>
            <ul style={{ display: "flex", gap: 20, listStyleType: "none" }}>
                {/* Public links */}
                <li>
                    <NavLink to="/" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>About</NavLink>
                </li>

                {/* Authenticated user links */}
                {isAuthenticated && (
                    <>
                        <li>
                            <NavLink to="/profile" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Profile Settings</NavLink>
                        </li>
                        {/* Editor links */}
                        {(hasRole('editor') || hasRole('admin')) && (
                            <>
                                <li>
                                    <NavLink to="/editor/dashboard" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Editor Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/editor/articles" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/editor/media" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Media Library</NavLink>
                                </li>
                            </>
                        )}
                        {/* Admin links */}
                        {hasRole('admin') && (
                            <>
                                <li>
                                    <NavLink to="/admin/dashboard" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Admin Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/users" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>User Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/roles" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Role Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/settings" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>System Settings</NavLink>
                                </li>
                            </>
                        )}
                    </>
                )}

                {/* Unauthenticated links */}
                {!isAuthenticated && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>Signup</NavLink>
                        </li>
                    </>
                )}
            </ul>
            <style>
                {`
                    .text-red{
                    color:#f00;
                    }
                `}
            </style>
        </>
    );
}

export default Header;