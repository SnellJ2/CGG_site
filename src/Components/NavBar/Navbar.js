import React from 'react'
import './index.css'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div class="container">
      <div class="row">
        <div class="col">
          <div className="box">
            <NavItem name="Home" link="/home" />
          </div>
        </div>
        <div class="col">
          <div className="box">

            <NavItem name="Catalog" link="/catalog" />
          </div>
        </div>
        
        <div class="col-2">

          <div className="box">
     
            <NavItem name="Contact Us" link="/contact" />
          </div>
    
        </div>
        <div class="col">
          <div className="box">
            <NavItem name="About" link="/about" />
          </div>
        </div>
        <div class="col">
          <div className="box">
            <NavItem name="Cart" link="/cart" />
          </div>
        </div>
        <div class="col">
          <div className="box">
            <NavItem name="Shop" link="/shop" />
          </div>
        </div>
        <div class="col" >
          <div className="box">
            <NavItem name="Login" link="/login" />
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}



export default Navbar
