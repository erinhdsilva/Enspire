import React from 'react'
import videobg from '../pages/bg-new.mp4';
import {NavLink } from "react-router-dom";
import './sponsor.css';
const Sponsor = () => {
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
<h1 className="sponsor">Our Sponsors</h1>
<a href="https://www.markoknow.com/"><img className='img-1' src="https://enspire.netlify.app/_next/static/media/markoknow.e3071574.png?imwidth=1080"></img></a> 
<a href="https://insystlabs.com/"><img className='img-2' src="https://enspire.netlify.app/_next/static/media/insyst.1e0945cf.png?imwidth=1080"></img></a>
<a href="https://stockpe.app/"><img className='img-3' src="https://enspire.netlify.app/_next/static/media/stockpe.5e2a5255.png?imwidth=1080"></img></a>
<a href="https://www.blogadda.com/"><img className='img-4' src="https://enspire.netlify.app/sponsors/blogadda.jpeg"></img></a>
<a href="https://bugsee.com/"><img className='img-5' src="https://enspire.netlify.app/sponsors/bugsee.png"></img></a>
<a href="https://www.aquasec.com/products/cspm/"><img className='img-6' src="https://enspire.netlify.app/sponsors/cloudsploit.jpeg"></img></a>
<a href="https://www.lensfit.com/"><img className='img-7' src="https://enspire.netlify.app/sponsors/lensfit.png"></img></a>
<a href="https://ohcampus.com/"><img className='img-8' src="https://enspire.netlify.app/sponsors/ohcampus.jpeg"></img></a>
<a href="https://wazirx.com/"><img className='img-9' src="https://enspire.netlify.app/sponsors/wazirx.png"></img></a>

</div>
</div>
</>
  )
}

export default Sponsor