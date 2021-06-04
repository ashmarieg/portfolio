import React from 'react';
import './About.scss'
import polaroid from '../../assets/Square-Polaroid-Frame.png'

const About = () => {
  return (
<div className="about"> 
{/* <hr className="about__dotted"></hr> */}
<div className="about_title-container">
<h1 className="about-title">About Me</h1>
</div>
<div class="typewriter">
  {/* <h1 className="about-title">The cat and the hat.</h1> */}
</div>
  <div className="about-container">
  {/* <img className="about__polaroid" src={polaroid} alt='polaroid'></img> */}
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="about__polaroid-container">
      {/* <img className="about__polaroid" src={polaroid} alt='polaroid'></img> */}
      {/* <img className="about__polaroid-right" src={polaroid} alt='polaroid'></img> */}
      {/* <img className="about__polaroid" src={polaroid} alt='polaroid'></img> */}
    </div>
  
  </div>
  
</div>
  )
}

export default About;