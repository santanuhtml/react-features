import { NavLink } from "react-router-dom";
import carticon from '../assets/images/shopping-bag.png';
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Header() {
  const { cartLength, show } = useContext(CartContext);

  return (
    <header>
      {show && <div>Already Added</div>}
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => `nav__a ${isActive ? 'text-red' : ''}`}
          >
            <img src={carticon} alt="cart icon" />
            <span>{cartLength}</span>
          </NavLink>
        </li>
      </ul>
      <style>
        {`
          .text-red { color: #f00; }
        `}
      </style>
    </header>
  );
}

export default Header;
