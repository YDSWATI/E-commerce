import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>Discover the Latest</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="wave icon" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <span>Explore Now</span>
                    <img src={arrow} alt="arrow icon" />
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} alt="hero visual" />
            </div>
        </div>
    );
};

export default Hero;

