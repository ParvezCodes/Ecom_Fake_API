import React from "react";
import "../Styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">Prvzz</Link>
        </div>
        <div className="navMenu">
          <Link to="/">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
