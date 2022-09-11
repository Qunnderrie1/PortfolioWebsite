import { MotionConfig } from 'framer-motion';
import React from 'react'
import '../App.css'
import {motion} from "framer-motion"


const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , y: 400}} 
    transition={{delay: 0.2}}
    whileInView={{opacity: 1 , y: 0}}
    className='skillsContainer container-fluid'>
        <h2 className='headerText'>&#x3D;&gt; Skills</h2>
        <div className='listContainer'>
        <div className='leftSkillsContainer'>
           <h2 className='listHeader'>Front-End</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Boostrap 5</li>
                <li>React.js</li>
            </ul>
        </div>
        <div className='rightSkillsContainer'>
            <h2 className='listHeader'>Back-End</h2>
            <ul>
                <li>Node.js</li>
                <li>Resful API</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Python</li>
            </ul>
        </div>
     </div>
    </motion.div>
  )
}


export default Skills;