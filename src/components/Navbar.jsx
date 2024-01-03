import {NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <header className="header">
       <img className="logo" src="https://enspire.netlify.app/enspire-logo.png?imwidth=1080"></img>
       <div className="text">Are you ready to dive into an ocean of Innovation?</div>
       
       {/* <NavLink to="/" className="w-10 h-10 rounded-lg bg-white item-center justify-center flex font-bold shadow-md ">
            <p>EHD</p>
        </NavLink> */}
        {/* <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
                About</NavLink>
                <NavLink to="/contact" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
                Contact</NavLink>
        </nav> */}
         <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/home" className="letsgo">
                Let's Go &rarr;</NavLink>
                </nav> 
    </header>
  )
}

export default Navbar
