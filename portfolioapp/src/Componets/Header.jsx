import React from 'react'
import '../App.css'
import {motion} from "framer-motion"


const Header = () => {
  return (
    <div 

     className='headerContainer container'>
        <h2 className='helloText'>&lt;Hello /&gt;</h2>
        <h3>I am</h3>
        <h3>A Full Stack</h3>
        <h3>Developer.</h3>
        <a className='btn resumeBtn  btn-primary' href='./files/QunnderrieSnelling-Developer.pdf' download>Resume</a>

    </div>
  )
}

export default Header;