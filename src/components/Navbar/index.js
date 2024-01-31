import React from 'react'
import './index.css'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({count}) => {
  return (
    <div>
      <nav className='Navbar_header'>
        <div className='logo_container'>
          <h1 className='navbar_logo_name'>Merush</h1>
        </div>
        <div className='div-shopping-cart-icon'>
          <CiShoppingCart className='shopping-cart-icon'/>
          {count>0 && <span className='count_trigger_span'>{count}</span>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;