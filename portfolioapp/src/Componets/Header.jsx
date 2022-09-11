import React from 'react'
import '../App.css'
import {motion} from "framer-motion"


const Header = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , x: 400}} 
    transition={{delay: 0.2}}
    whileInView={{opacity: 1 , x: 0}}
     className='headerContainer container'>
        <h2 className='helloText'>&lt;Hello /&gt;</h2>
        <h3>I am</h3>
        <h3>A Full Stack</h3>
        <h3>Developer.</h3>
        <a className='btn resumeBtn  btn-primary' href='./files/QunnderrieSnelling-Developer.pdf' download>Resume</a>

    </motion.div>
  )
}

export default Header;