import React from 'react'
import '../App.css'
import {motion} from "framer-motion"

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 , y: 400}} 
    transition={{delay: 0.2}}
    whileInView={{opacity: 1 , y: 0}}
      id='about' 
      className='aboutContainer container'>


        <h2 className='headerText'>&#x3D;&gt; About Me</h2>
        <p> <span>I am an experience </span> Full Stack Web Developer. <span>I begin my coding journey a year ago when I began teaching myself 
how to code. A few months later I decided to attend a coding bootcamp which was the best decision I have ever
made. I love learning new things, love taking on challenges and also problem solving. While attending coding bootcamp
I can now create</span> high-scalable web and mobile applications. <span> After I'm finish my coding bootcamp school
my plans to keep learning, build more projects, and find my dream career at a great company.</span>
</p>

    <hr />
    </motion.div>
  )
}

export default About;