import React from 'react'
import '../App.css'
import github from '../Images/github1.png'
import twitter from '../Images/twitter1.png'
import Linkedin from '../Images/Linkedin1.png'


const Icons = () => {
  return (
    <div className='sideContainer'>
        <h4>Connect With Me</h4>-

        <div className='iconsContainer'>
          <a href='https://github.com/Qunnderrie1'><img src={github} /></a>
          <a href='https://twitter.com/QunnderrieDev'><img src={twitter} /></a>
          <a href='https://www.linkedin.com/in/qunnderrie/'><img src={Linkedin} /></a>
        </div>
        <hr />
    </div>
  )
}


export default Icons;
