import React from 'react'
import {NavLink } from "react-router-dom";
import videobg from '../pages/bg-new.mp4';
import './contactus.css';

const Contact = () => {
  return (
    <>
    <div className='overlay'></div>
    <div className="main">
      
<video className='video' src={videobg} autoPlay loop muted />

    
      <div><nav className="buttons">
    <NavLink to="/about" className="content" >
        Events</NavLink>
       
        <NavLink to="/contact" className="content1" >
        Contact </NavLink>
        
    <NavLink to="/gallery" className="content2" >
        Gallery</NavLink>
        
    <NavLink to="/teams" className="content3" >
        Teams</NavLink>
     
    <NavLink to="/sponsor" className="content4" >
        Sponsors</NavLink>
        
</nav> 

    </div>
    <h1>Contact Us</h1>
   <label className="email">Email</label>
   <input type="text" className="email1"></input>
   <label className="message">Message</label>
   <input type="text" className="message1"></input>
   <button className='submit'>Send Message</button>
    </div>
    </>
  )
}

export default Contact