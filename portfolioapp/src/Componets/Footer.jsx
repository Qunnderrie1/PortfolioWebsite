import React from 'react'
import '../App.css'






const Footer = () => {


    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className='footerContainer container-fluid'>
        <footer>
         Copyright &copy; {year} Designed and Developed by Qunnderrie Snelling
        </footer>
    </div>
  )
}


export default Footer;