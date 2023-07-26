import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="to-center">
         <div className='header-items'>
        <div className="heading-bg">
            <h1 class="main-heading"> E-Commerce Website</h1>
            <Link className='heading' to='/'>Home</Link>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Header

