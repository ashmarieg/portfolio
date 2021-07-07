import React from 'react'
import './Home.scss'
import pic1 from '../assets/blackdress2.png'


const Home = () => {
  return (
    <div className="home">
      {/* <h3 className="home-hi">Hi, I'm</h3> */}
      <div className="home__content">
        {/* <div className> */}
          <img className="home__img" src={pic1}></img>
        {/* </div> */}
        <h1 className="home-name">Glenny</h1>
      </div>

      {/* <p className="home-bio">Hi there, I'm Ashley Glenny. I'm a web developer with a communications and human rights background.</p> */}
    </div>
  )
}

export default Home;