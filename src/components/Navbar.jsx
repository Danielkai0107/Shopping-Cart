import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../func/context';

const Navbar = () => {
  const { carts, cartsOpen, setCartsOpen } = useContext(AppContext);
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        SHOP<span>dooh</span>
      </Link>
      <ul>
        <li></li>
        <li
          onClick={() => {
            setCartsOpen(!cartsOpen);
          }}
        >
          {carts.length !== 0 && <span className="cartsDot"></span>}
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
