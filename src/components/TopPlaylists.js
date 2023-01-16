import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './TopPlaylists.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    centerMode: true,
    // variableWidth: true
};

const TopPlaylists = () => {
  return (
    <div className='top-playlists'>
        <div className='playlists-title'>
            <span>T</span>
            <span>o</span>
            <span>p </span>
            <span>P</span>
            <span>l</span>
            <span>a</span>
            <span>y</span>
            <span>l</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
            <span>s</span>
        </div>
        <Slider {...settings}>
            <div className='card'>
                <div className="card-text">
                    <h2>01</h2>
                    <h1>Alphonso Dave's Playlist</h1>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/3102CluYRWvPoAAXasOB4J?utm_source=generator" width="100%" height="352" frameBorder="0">

                </iframe>
            </div>
            <div className='card'>
                <div className="card-text">
                    <h2>01</h2>
                    <h1>Alphonso Dave's Playlist</h1>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/3102CluYRWvPoAAXasOB4J?utm_source=generator" width="100%" height="352" frameBorder="0">
                    
                </iframe>
            </div>
        </Slider>
    </div>
  )
}

export default TopPlaylists