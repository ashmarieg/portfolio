import React from 'react';
import './About.scss'
import polaroid from '../../assets/Square-Polaroid-Frame.png'

const About = () => {
  return (
<div className="about"> 
  <div>
  <div>
    <h1>About Me</h1>
  </div>
  <div>
    <img className="about__polaroid" src={polaroid} alt='polaroid'></img>
  </div>
  </div>
  
</div>
  )
}

export default About;