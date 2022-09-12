import React from 'react'
import '../App.css'
import {FiMenu }  from 'react-icons/fi'
import { HiOutlineX}  from 'react-icons/hi'
import { useState } from 'react'
import { motion } from 'framer-motion'









 function NavBar() {

const [handle , setHandle] = useState(true)



const NavBar = () => {
  setHandle(!handle)
}
  return (
    

    <div className='navContainer '>
     <div  

     className={handle ? 'close container' : 'nav container'}>
      <div className="logo">
      <h4 className='logo'>&#x3D;&gt; Qunnderrie Snelling</h4>
      </div>
    <ul className='nav-items'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#project'>Portfolio</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
    </div >
      <div onClick={NavBar} className='hamburgerMenu' >
       {
        handle ?  <FiMenu className='openMenu' color='white' size="40px" /> : <HiOutlineX className='closeMenu'  color='white' size="40px" />


       }  

      </div>
      
      
    </div>


  )
}



export default NavBar;
