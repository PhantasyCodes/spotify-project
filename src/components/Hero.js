import React from 'react'
import { Link } from 'react-router-dom'
import spotify from '../assets/images/spotify.png'
import arrowRight from '../assets/images/arrow-right.png'
import {motion} from 'framer-motion'

import './Hero.css'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const Hero = () => {
  return (
    <div className='hero'>
        <div className='logo'>
            <span>P</span>
            <span>L</span>
            <span>A</span>
            <span>Y</span>
            <span>S</span>
            <span>T</span>
            <span>R</span>
        </div>
        <motion.h1 
            exit={{opacity: 0}} 
            transition={transition} 
            className='hero-text'>Stand out for <span>being you</span>
        </motion.h1>
        <Link to={`/playlists`}>
            <motion.div 
                exit={{scale: 15}}
                className="next-page">
                <img src={arrowRight} alt="arrow" />
            </motion.div>
        </Link>
        <div className="powered">
            <img src={spotify} alt="spotify"/>
            <p>Powered by Spotify</p>
        </div>
    </div>
  )
}

export default Hero