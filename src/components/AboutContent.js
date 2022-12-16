import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyle.css"
import up from "../assets/react1.jpg"
import down from "../assets/react2.png"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
    <h1> Who am I ?</h1>
    <p>Im a react font end developer. I create responsive secure websites for my clients.</p>
    <Link to="/contact">
        <button style={
          {padding:"15px 50px",background:"yellow",color:"black"}
        } classname="n">Contact</button>
    </Link>
        </div>
        <div className="right">
             <div className="img-container">
                <div className="img-stack top">
                <img src={up} alt="true" className='img'/>
                </div>
                <div className="img-stack bottom">
                <img src={down} alt="true" className='img'/>
                </div>
             </div>
        </div>
      
    </div>
  )
}

export default AboutContent
