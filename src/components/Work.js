import React from 'react'
import "./WorkCardStyle.css"
import WorkCardData from "./WorkCardData"
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='work-container'>
        <div className="project-heading">
            <div className="project-container">
                {WorkCardData.map((val,ind)=>{
                    return(
                        <WorkCard 
                        key={ind}
                        title={val.title}
                        imgsrc={val.imgsrc}
                        text={val.text}
                        view={val.view}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Work