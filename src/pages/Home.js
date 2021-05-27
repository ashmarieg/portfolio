import React from 'react'
import './Home.scss'
import pic1 from '../assets/useme.png'


const Home = () => {
  return (
    <div className="home">

      <div className="home__content">
        <img className="home__img" src={pic1}></img>
        <h1 className="home-name">Glenny</h1>
      </div>

      {/* <p className="home-bio">Hi there, I'm Ashley Glenny. I'm a web developer with a communications and human rights background.</p> */}
    </div>
  )
}

export default Home;