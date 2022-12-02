import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import ringo from "../assets/About/ringo.png";


const AboutContent = () => {
  return <div className="about">
<div className="left">
    <h1> 🕹️ </h1>
    
    <br/>
    
    <p>Mi nombre es Gastón, soy de Jujuy, Argentina y me dedico al desarrollo web enfocado en el Front End, el cual complemento con diseño UX/UI.  </p>
    <p>Día a día busco seguir aprendiendo nuevas tecnologías y herramientas para poder fortalecer mis conocimientos. </p>
        <p>También el trabajo en equipo me parece fundamental, ya que con el tiempo cada experiencia tiene una enseñanza y te posibilita poder ver diferentes puntos de vista para seguir creciendo, mi objetivo es formar parte de proyectos en los que pueda mejorar tanto como persona y profesional. </p>
  <p> El poder compartir ideas a otras personas y que sea recíproco, me permite poder seguir formándome de distintas maneras y conocer muchísimo más sobre diferentes temas, al igual que descubrir los valores de las otras personas y mejorar mientras aprendo de las experiencias y desafíos que se me presenten.</p>
  <p>A la hora de resolver problemas no dejo pasar las oportunidades y busco solucionarlos de alguna manera, aunque a veces me cueste afrontarlos, trato de no rendirme.</p>
    <Link to="/Contact">
        <button className="btn">Download my resume</button>
    </Link>
</div>
<div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={ringo} className="img" alt="true"/>
        </div>
      
    </div>
</div>

    </div>
};

export default AboutContent;