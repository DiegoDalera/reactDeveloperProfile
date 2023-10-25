import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© Diego Dalera. All rights reserved.</p>

      <ul class="redes_sociales">
        <li>
          <a href="https://www.github.com" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            <i class="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer