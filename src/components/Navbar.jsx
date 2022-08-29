import React from "react";

// use react-router Link or NavLink
const Link = <a>Login</a>;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link"></Link>
      <span data-cy="navbar-cart-items-count">{10}</span>
      <button data-cy="navbar-login-logout-button"></button>
    </div>
  );
};

export default Navbar;
