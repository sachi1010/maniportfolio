import React from 'react'
import './Footer.css'
import theme from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <div className='logo'>
                 <h1>Mani</h1>
                 <img src={theme} alt="" />
            </div>
           <p>I am a Civil Engineer 10 years Of Experience in design, planning, and construction management.</p>
        </div>
        <div className="footer-top-right">
            <div className='social-links'>
               <h2>Follow Us</h2>
               <div className="links">
                  <a href="http://www.linkedin.com/in/ermanik001" target='_blank'><i className="bi bi-linkedin"></i></a>
                  <a href="https://wa.me/+919788176043" target='_blank'><i className="bi bi-whatsapp"></i></a>
               </div>
                 
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Manikandan. All rights reserved.</p>
        
      </div>
    </div>
  )
}

export default Footer
