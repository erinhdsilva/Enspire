import React from 'react'
import {NavLink } from "react-router-dom";
import videobg from '../pages/bg-new.mp4';
import './About.css';
import image1 from '../pages/i-1.png';
import image2 from '../pages/i-2.png';
import image3 from '../pages/i-3.png';
import image4 from '../pages/i-4.png';
import image5 from '../pages/i-5.png';
import image6 from '../pages/i-6.png';
import image7 from '../pages/i-7.png';
import image8 from '../pages/i-8.png';
const About = () => {
  return (
    <>
    <div className='overlay'></div>
    <div className="main">
      
<video className='video' src={videobg} autoPlay loop muted />

    
      <div><nav className="buttons">
    <NavLink to="/about" className="content" >
        Events</NavLink>
       
        <NavLink to="/contact" className="content1" >
        Contact</NavLink>
        
    <NavLink to="/gallery" className="content2" >
        Gallery</NavLink>
        
    <NavLink to="/teams" className="content3" >
        Teams</NavLink>
     
    <NavLink to="/sponsor" className="content4" >
        Sponsors</NavLink>
        
</nav> 

    </div>
    <h1>Events</h1>
   <a href="https://www.instagram.com/p/Cx8a-nqhj-H/"> <img className="image-events1"  src={image1}></img></a>
   <a href="https://www.instagram.com/p/Cx6Msl5B6Kh/"> <img className="image-events2" src={image2}></img></a>
   <a href="https://www.instagram.com/p/Cx5IgWxrjAD/"> <img className="image-events3" src={image3}></img></a>
   <a href="https://www.instagram.com/p/Cx3r6vPhdC6/"> <img className="image-events4" src={image4}></img></a>
   <a href="https://www.instagram.com/p/Cx3K-9XB2bc/"> <img className="image-events5" src={image5}></img></a>
   <a href="https://www.instagram.com/p/Cx0EujLLxZQ/"> <img className="image-events6" src={image6}></img></a>
   <a href="https://www.instagram.com/p/CyMTOB5B27k/"> <img className="image-events7" src={image7}></img></a>
   <a href="https://www.instagram.com/p/CyF_gGJLqqn/"> <img className="image-events8" src={image8}></img></a>
    </div>
    </>
  )
}

export default About