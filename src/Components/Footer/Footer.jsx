import React from 'react'
import './Footer.css'
import { Github, Linkedin,Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <p>© Diego Dalera. All rights reserved.</p>

      <ul class="redes_sociales">
        <li>
          <a href="https://www.github.com" target="_blank">
          <Github color="white" size={20}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
          <Linkedin color="white" size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
          <Instagram color="white" size={20} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer