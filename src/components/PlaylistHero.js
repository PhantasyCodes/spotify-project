import React from 'react'
import spotify from '../assets/images/spotify.png'
import arrowLeft from '../assets/images/arrow-left.png'
import pinkRight from '../assets/images/pink-right.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import TopPlaylists from './TopPlaylists'

import './Hero.css'
import './PlaylistHero.css'
import { useState } from 'react'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.14,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.14,
        staggerDirection: 1,
      },
    },
};

const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
};

const PlaylistHero = () => {

  const [transitionProperties, setTransitionProperties] = useState({
    exit: {scale: 15}
  })

  function toggleTransition() {
    setTransitionProperties({
        exit: {scale: 15}
      }
    )
  }

  return (
    <motion.div 
        initial='initial'
        animate='animate'
        exit='exit'
        className='playlist-hero hero'>
        <motion.div className='logo'>
            <motion.span variants={firstName} className='first'>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>Y</motion.span>
            </motion.span>
            <motion.span variants={lastName} className='first'>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>R</motion.span>
            </motion.span>
        </motion.div>
        <Link to={`/`}>
            <motion.div 
              onClick={toggleTransition}
              variants={{transitionProperties}} 
              initial={{opacity:0, scale: 1 }} 
              animate={{opacity: 1}} 
              whileHover={{ scale: 1.5,  transition: {duration:0.3} }} 
              exit= {{scale: 15, transition: {duration:1.8}}} 
              transition={{duration:2.9}} 
              className="next-page prev-page">
              <img src={arrowLeft} alt="arrow" />
            </motion.div>
        </Link> 
        <Link to={`/`}>
            <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:0.8 }} className="next-page" style={{backgroundColor: '#FFE5D9'}}>
                    <motion.img exit={{ opacity: 0, transition:{ duration:0.1 } }} src={pinkRight} alt="arrow" />
            </motion.div>
        </Link> 
        <TopPlaylists />
        <div className="powered">
            <img src={spotify} alt="spotify"/>
            <p>Powered by Spotify</p>
        </div>
    </motion.div>
  )
}

export default PlaylistHero