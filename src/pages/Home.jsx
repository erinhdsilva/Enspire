import React from 'react'
import {NavLink } from "react-router-dom";
const home = () => {
  return (
    <div>
    <header className="header">
    <img className="logo" src="https://enspire.netlify.app/enspire-logo.png?imwidth=1080"></img>
    <div className="text">Are you ready to dive into an ocean of Innovation?</div>
    <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/home2" className="letsgo">
                Let's Go &rarr;</NavLink>
                </nav> 
    </header>
     {/* <div><nav className="flex text-lg gap-7 font-medium">
    <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
        About</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
        Contact</NavLink>
</nav> </div>  */}
</div>
  )
}

export default home