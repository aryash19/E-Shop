import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className="header">
    <div className="header_logo">
      <StorefrontIcon fontSize="large" className="header_logoimage"/>
      <h2 className="header_logotitle"> eSHOP</h2>

      </div>
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
          <div className="itemBasket">
           <ShoppingBasketIcon />
           <span className="navitemtwo  nav__basketCount">0</span>
          </div>
        </div>
      
    </div>
  )
}

export default Header;
