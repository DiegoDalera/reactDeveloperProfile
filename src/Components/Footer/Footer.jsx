import React from 'react'
import './Footer.css'
import { Github, Linkedin,Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className='footer'>
      
      <p>© Diego Dalera. All rights reserved.</p>

      <ul class="redes_sociales">
        <li>
          <a href="https://github.com/DiegoDalera" target="_blank">
          <Github className='footer-icon' />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/diego-martin-dalera/" target="_blank">
          <Linkedin className='footer-icon'/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/diegomartin.arg" target="_blank">
          <Instagram className='footer-icon'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer