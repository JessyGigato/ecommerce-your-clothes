import React from 'react';
import logo from "../images/logo.png"
import cart from "../images/cart.png"

export const Header = () => {
  return (
    <header>
        <a href="#">
          <div className="logo">
            <img src={logo} alts="logo" width="150"/>
          </div>
        </a>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">productos</a>
          </li>
        </ul>
        <div className='cart'>
          <button className='cart-button'>
            <img src={cart} alts="cart" width="50">
            </img>
            <span className='item_total'>0</span>
            
          </button>
          
        </div>
    </header>
  )
}
