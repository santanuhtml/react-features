import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <li>
                    <NavLink to="/" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    Cart (0)
                </li>
            </ul>
        </>
    )
}
export default Header;