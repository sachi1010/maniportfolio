import React from 'react'
import './Hero.css'
import profile from '../../assets/heroimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-img-container" data-aos="fade-up-right">
        <div className="glow-background" ></div>
        <div className='hero-image' data-aos="zoom-in"><img src={profile} alt="Profile" /></div>  
      </div>
      <h1 data-aos="zoom-in-down"><span>I'm Manikandan</span> <br/>Civil Engineer</h1>
      <p data-aos="zoom-in-down">
        Civil Engineer with 10 years of experience, skilled in AutoCAD, Revit, and STAAD Pro. Focused on delivering reliable and efficient structures.
      </p>

      <div className="hero-action" data-aos="zoom-in-down">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href="./public/resume.pdf" download="Manikandan Resume" className="hero-resume">Download Resume</a>
      </div>
    </div>
  )
}

export default Hero
