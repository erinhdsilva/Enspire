import React from 'react'
import {NavLink } from "react-router-dom";
import videobg from '../pages/bg-video-events.mp4';
import './gallery.css';
import image1 from '../pages/g-1.jpg';
import image2 from '../pages/g-2.jpg';
import image3 from '../pages/g-3.jpg';
import image4 from '../pages/g-4.jpg';
import image5 from '../pages/g-5.jpg';
import image6 from '../pages/g-6.jpg';
import image7 from '../pages/g-7.jpg';
import image8 from '../pages/g-8.jpg';
const Gallery = () => {
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
<h1 className="gallery">Gallery</h1>
<img className="image-gallery1"  src={image1}></img>
<img className="image-gallery2"  src={image2}></img>
<img className="image-gallery3"  src={image3}></img>
<img className="image-gallery4"  src={image4}></img>
<img className="image-gallery5"  src={image5}></img>
<img className="image-gallery6"  src={image6}></img>
<img className="image-gallery7"  src={image7}></img>
<img className="image-gallery8"  src={image8}></img>
    </div>
    </div>
    </>
  )
}

export default Gallery