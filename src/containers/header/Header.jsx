import React from 'react';
import './header.css';
import StarryBackground from '../../assets/animation/stars'

const Header = () => {
  return (
    <div className='sladelim__header section__padding' id='home'>
      <div className='sladelim__header-content'>
        <p className='gradient__text'>Hello, my name is</p>
        <h1 className='gradient__text'>Slade Lim</h1>

        <p>I am a Software Development major at the University of Utah. 
          This website serves as a platform to showcase my professional 
          journey through a detailed resume, projects, and more.
        </p>  
      </div>
      <div className='sladelim__header-animation'>
          <StarryBackground />
      </div>
    </div>
  )
}

export default Header