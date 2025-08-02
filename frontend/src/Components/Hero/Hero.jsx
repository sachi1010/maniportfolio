import React from 'react'
import './Hero.css'
import profile from '../../assets/heroimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-img-container">
        <div className="glow-background" ></div>
               <div className='hero-img'  > <img src={profile} alt=""  className='profile-img'/></div>
      </div>
      <h1><span>I'm Manikandan</span> <br/>Civil Engineer</h1>
      <p>
        Civil Engineer with 10 years of experience, skilled in AutoCAD, Revit, and STAAD Pro. Focused on delivering reliable and efficient structures.
      </p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
