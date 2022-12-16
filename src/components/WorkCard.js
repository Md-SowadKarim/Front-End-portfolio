import React from 'react'
import "./WorkCardStyle.css"
import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.png"
import pro3 from "../assets/project5.png"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
   
        // <div className="project-heading">
        //     <div className="project-container">
        //         <div className="project-card" key={props.index}>
        //             <img src={props.imgsrc} alt='pro1' />
        //             <h2 className='project-title'>{props.title}</h2>
        //             <div className="pro-details">
        //                 <p>{props.text}</p>
        //                 <div className="pro-btns">
        //                 <NavLink to="url.com" className="btn">View</NavLink>
        //                     <NavLink to="url.com" className="btn">Source</NavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="project-heading">
            <div className="project-container">
                <div className="project-card" >
                    <img src={pro1} alt='pro1' />
                    <h2 className='project-title'>"ThIs iS buSSinEss lAndiNG PaGe"</h2>
                    <div className="pro-details">
                        <p>It is a business static web page to give information to their client, amy inspires a grounded tangible and self affirming sense of wow i really can do this for over 1000 online entrepreneurs. Best selling marketing </p>
                        <div className="pro-btns">
                            <a href="https://busistall.netlify.app/" className="btn">View</a>
                            <a href="https://github.com/Md-SowadKarim/Landing-Page" className="btn">Source</a>
                        
                            
                        </div>
                    </div>
                </div>
                <div className="project-card" >
                    <img src={pro3} alt='pro1' />
                    <h2 className='project-title'>"ThIs iS pOrtFoliO weB sItE foR Me"</h2>
                    <div className="pro-details">
                        <p>This is portfolio web site for me, where we showed others project to  enhance and share my knowledge with otherstheir client, amy inspires a grounded tangible and self affirming sense of wow i really can do this for over 1000 online entrepreneurs.</p>
                        <div className="pro-btns">
                            <a href="https://skfrontportfolio.netlify.app/" className="btn">View</a>
                            <a href="https://github.com/Md-SowadKarim/Front-End-portfolio" className="btn">Source</a>
                        
                            
                        </div>
                    </div>
                </div>
                
                <div className="project-card" >
                    <img src={pro2} alt='pro1' />
                    <h2 className='project-title'>"ThIs iS pHotO sHoWinG sTalL"</h2>
                    <div className="pro-details">
                        <p>This is photo showing place, where you may say about your journey as a photo graphar indeed, amy inspires a grounded tangible and self affirming sense of wow i really can do this for over 1000 online entrepreneurs. Best selling marketing </p>
                        <div className="pro-btns">
                            <a href="https://captionstall.netlify.app/" className="btn">View</a>
                            <a href="https://github.com/Md-SowadKarim/caption-stall" className="btn">Source</a>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
   
  )
}

export default WorkCard