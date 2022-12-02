import "./FooterStyles.css"
import React from 'react'
import {FaGithub, FaHome, FaLinkedin, FaMailBulk,} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
<div className="footer container">
    <div className="left">
        <div className="location">
<FaHome size={30} style={{color:"#fff", marginRight: "2rem" }} />
<div>
    <p>Ciudad de Córdoba, Argentina.</p>
    
</div>
        </div>
<div className="email">
    <p><FaMailBulk size={25}  style={{color:"#fff", marginRight: "2rem"}} />Gastonibanezcv@gmail.com</p>
</div>
    </div>
    <div className="right">
        <div className="social">
            
        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }} />
        <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }} />
        
        </div>
    </div>

</div>

    </div>
  )
}

export default Footer;