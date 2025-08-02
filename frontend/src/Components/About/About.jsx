import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/myimg.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box" data-aos="flip-up">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left" data-aos="fade-up">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right" data-aos="fade-down">
          <div className="about-para">
            <p>
              I am Manikandan, a dedicated Civil Engineer with over 10 years of experience in planning, designing, and managing construction projects. My expertise spans across residential, commercial, and infrastructure developments.
            </p>
            <p>
              Skilled in industry-standard tools like AutoCAD, Revit, STAAD Pro, and Primavera, I ensure structural integrity, cost-efficiency, and timely delivery. I am passionate about turning ideas into durable, functional realities.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>Auto Cad</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>Revit</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Staad Pro</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Primavera</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>3ds Max</p><hr style={{ width: "84%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements" data-aos="fade-up">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
