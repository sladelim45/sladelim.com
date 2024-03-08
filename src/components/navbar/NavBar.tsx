import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
  <p><a href='#Portfolio'>Portfolio</a></p>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='sladelim__navbar'>
        <div className='sladelim__navbar-links'>
            <div className='sladelim__navbar-links_logo'>
                <a href='#home'><img src={logo} alt="logo" /></a>
            </div>
            <div className='sladelim__navbar-links_container'>
              <Menu />
            </div>
        </div>
        <div className='sladelim__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='sladelim__navbar-menu_container scale-up-center'>
              <div className='sladelim__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default NavBar