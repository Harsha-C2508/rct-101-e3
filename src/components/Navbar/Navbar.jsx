import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const count = useContext(CartContext);
  const logout=()=>{
    
  }
  return (
    <div data-cy="navbar" style={{width:"75%",margin:"auto"}}>
      <Link data-cy="navbar-home-link" to="/" style={{textDecoration:"none",marginRight:"750px"}}>Logo</Link>
      <span data-cy="navbar-cart-items-count" style={{marginRight:"5px"}}>Cart:{count}</span>
      <button data-cy="navbar-login-logout-button" style={{borderRadius:"5px"}} onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
