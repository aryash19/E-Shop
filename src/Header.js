import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
    <Link style={{ textDecoration: "none" }} to="/">
    <div className="header_logo">
      <StorefrontIcon fontSize="large" className="header_logoimage"/>
      <h2 className="header_logotitle"> eSHOP</h2>

      </div>
    </Link>
    
        <div className="header_search">
          <input type="text" className="header_searchInput"/>
          <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
          <div className="nav_item">
           <span className="navitemone">Hello Guest</span>
           <span className="navitemtwo">Sign In</span>
          </div>
          <div className="nav_item">
           <span className="navitemone">Your</span>
           <span className="navitemtwo">Shop</span>
          </div>
          <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="itemBasket">
           <ShoppingBasketIcon />
           <span className="navitemtwo  nav__basketCount">0</span>
          </div>

          </Link>
          
        </div>
      
    </div>
  )
}

export default Header;
