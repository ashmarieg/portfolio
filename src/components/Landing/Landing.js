import React from 'react'
import './Landing.scss'
import hero from '../../assets/SolidBackgroundAshleyGlenny.png'

function Landing() {
  return (
    <div className="landing">
      <img className="landing__hero" src={hero} alt="hero"></img>
    </div>
  )
}

export default Landing
