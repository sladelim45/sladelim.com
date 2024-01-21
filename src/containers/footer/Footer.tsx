import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='sladelim__footer section__padding'>
      <div className='sladelim__footer-links'>
        <div className='sladelim__footer-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='sladelim__footer-links-div'>
          <h4>Follow me</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer