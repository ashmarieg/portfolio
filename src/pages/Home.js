import React from 'react'
import './Home.scss'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Landing from '../components/Landing/Landing'



const Home = () => {
  return (
    <div className="home">
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;