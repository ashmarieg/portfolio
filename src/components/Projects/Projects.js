import React from 'react'
import './Projects.scss'
import pic1 from '../../assets/Screen Shot 2021-07-07 at 4.36.58 PM.png'
import pic2 from '../../assets/Screen Shot 2021-07-07 at 4.37.02 PM.png'




const Projects = () => {
  return (
    <div className="projects">
      
      <h1 className="projects__title">PROJECTS</h1>
      
      <div className="projects__imgcontainer">
        
        <p className="projects__thumb">
        <img src={pic1}/>
        <span><input type="button" value="Learn More"></input></span>
        </p>
        
        <p className="projects__thumb">
        <img src={pic2}/>
        <span><input type="button" value="Learn More"></input></span>
        </p>
        
        <p className="projects__thumb">
        <img src={pic1}/>
        <span><input type="button" value="Learn More"></input></span>
        </p>
        
        <img src={pic2}/>
        <img src={pic2}/>
        <img src={pic1}/>

      </div>

      
    

    </div>
  )
}

export default Projects;