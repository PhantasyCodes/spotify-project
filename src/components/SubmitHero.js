import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Hero.css'
import './SubmitHero.css'

const SubmitHero = () => {
  return (
    <div className="submit hero">
        <div className="logo">PLAYSTR</div>
        <div className="submission">
            <h2>Link your playlist below:</h2>
            <form action="" method="post">
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default SubmitHero