import React from 'react'
import {NavLink } from "react-router-dom";
import videobg from '../pages/bg-video-events.mp4';
import './teams.css';
const Teams = () => {
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
<h1 >Our Team</h1>
<p className="headname">Coordinators</p>
<img className="i-1" src="https://enspire.netlify.app/teamData/Dev_Shah.jpg" />
<p className="t-1">Dev Shah</p>
<img className="i-2" src="https://enspire.netlify.app/teamData/Admya.jpg" />
<p className='t-2'>Admya Maini</p>
<p className="headname1">Relations</p>
<img className="i-3" src="https://enspire.netlify.app/teamData/arpita.jpg" />
<p className='t-3'>Arpita Jena</p>
<img className="i-4" src="https://enspire.netlify.app/teamData/Apoorv.jpg" />
<p className='t-4'>Apoorv Shrivastava</p>
<img className="i-5" src="https://enspire.netlify.app/teamData/Dilip.jpg" />
<p className='t-5'>Dilip Patnana</p>
<p className="headname2">Event Lead</p>
<img className="i-6" src="https://enspire.netlify.app/teamData/Tushar_Agrawal.jpg" />
<p className='t-6'>Tushar Agrawal</p>
<img className="i-7" src="https://enspire.netlify.app/teamData/Divyanshi%20.jpg" />
<p className='t-7'>Divyanshi</p>
<img className="i-8" src="https://enspire.netlify.app/teamData/Aashish_Papneja.jpg" />
<p className='t-8'>Aashish Papneja</p>
<img className="i-9" src="https://enspire.netlify.app/teamData/Sakshi_Sharma.jpeg" />
<p className='t-9'>Sakshi Sharma</p>
<p className="headname3">Development Lead</p>
<img className="i-10" src="https://enspire.netlify.app/teamData/Karthik.jpeg" />
<p className='t-10'>Karthik S</p>
<img className="i-11" src="https://enspire.netlify.app/teamData/Deep.jpg" />
<p className='t-11'>Deep</p>
<p className="headname4">Outreach and Collaborations Team</p>
<img className="i-12" src="https://enspire.netlify.app/teamData/AryanKumar.jpg" />
<p className='t-12'>Aryan Kumar</p>
<img className="i-13" src="https://enspire.netlify.app/teamData/Umm.jpeg" />
<p className='t-13'>Umm E Kulsum</p>
<p className="headname5">Designers</p>
<img className="i-14" src="https://enspire.netlify.app/teamData/Vineet_Verma.jpg" />
<p className='t-14'>Vineet Verma</p>
<img className="i-15" src="https://enspire.netlify.app/teamData/ansukha.jpg" />
<p className='t-15'>Anushka Tiwari</p>
<p className="headname6">Web Team</p>
<img className="i-16" src="https://enspire.netlify.app/teamData/Mudit.jpg" />
<p className='t-16'>Mudit Yadav</p>
<img className="i-17" src="https://enspire.netlify.app/teamData/Rishi.jpg" />
<p className='t-17'>RishiRaj Maheshwari</p>
<img className="i-18" src="https://enspire.netlify.app/teamData/Charan.jpg" />
<p className='t-18'>Charan</p>
<img className="i-19" src="https://enspire.netlify.app/teamData/Samarth.jpg" />
<p className='t-19'>Samarth Sahu</p>
<img className="i-20" src="https://enspire.netlify.app/teamData/Sarthak.jpg" />
<p className='t-20'>Sarthak</p>
    </div>
    </div>
    </>
  )
}

export default Teams