import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import "./FooterStyle.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fcontainer">
            <div className="lfooter">
                    <div className="item">
                        <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <div>
                            <p>123 Housing Society.</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <div>
                            <p>017-998161-88</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <div>
                            <p>info@gmail.com</p>
                        </div>
                    
                </div>
                </div>
                <div className="rfooter">
                    <h4>About the company</h4>
                    <p>This is me Sowad Karim . Full Stack web developer.<br/>
                        I enfoy discussing new projects and looking for new job.</p>
                    <div className="social">
                   <a href="https://www.facebook.com/sowad.karim.7"><FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/></a> 
                   <a href='https://twitter.com/sowad_karim?t=1_Hnxg5wfHuJNG3mzjlwfA&s=09'> <FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/></a>
                   <a href='https://www.linkedin.com/in/md-sowad-kairm-004032181/' ><FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/></a>
                    </div>
                </div>
            
        </div>
      
    </div>
  )
}

export default Footer
