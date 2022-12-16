import React from 'react'
import { Link } from 'react-router-dom'
import introImg from '../assets/intro-bg.jpg'   
import "./HeroImgStyle.css"


const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className="intro-img"
            src={introImg} alt="introImg"/>
        </div>
        <div className="content">
            <p>HI, I AM A FULL_STACK</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/project" className='btn'>Project</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg