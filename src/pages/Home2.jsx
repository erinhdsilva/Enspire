import React from 'react'
import { IframeHTMLAttributes } from 'react'
import './home2.css';
import videobg from '../pages/bg-video-gallery.mp4';
import image1 from '../pages/image-1.jpg';
import image2 from '../pages/image-2.png';
import image3 from '../pages/image-3.png';

import {NavLink } from "react-router-dom";
const Home2 = () => {
  return (
    <><div className='overlay'></div>
    <div className="main">
      
<video className='video' src={videobg} autoPlay loop muted />
<div className='content'></div>
    
      <div><nav className="buttons">
    <NavLink to="/about" className="content" >
        Events</NavLink>
       
        <NavLink to="/contact" className="content1" >
        Contact Us</NavLink>
        
    <NavLink to="/gallery" className="content2" >
        Gallery</NavLink>
        
    <NavLink to="/teams" className="content3" >
        Team</NavLink>
     
    <NavLink to="/sponsor" className="content4" >
        Sponsors</NavLink>
        
</nav> 

<div className="edworkshops">
  <h1 className="h-1">About Enspire</h1>
  <h3>Enspire is the E-Summit of IIIT Lucknow where we conduct many events to ignite<br /><br /> the fire of entreprneurship among the students. 
    Enspire also aims to promote startups <br /><br />by providing guidance, through educational workshops, and financial aid.<br /><br />
    Enspire also focuses on imparting knowledge on important topics such as Cryptocurrency<br /><br /> and Trading through speaker sessions and fun events.

  </h3>
  {/* <img className="image-1" src={image1} /> */}
  <h3></h3>
  {/* <img className="image-2" src={image2} /> */}
  <img className="image-3" src={image3} />
</div> 
</div> 

</div>
</>

  )
}

export default Home2