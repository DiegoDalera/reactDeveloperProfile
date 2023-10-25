import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from '../../assets/logo.jpg';


const Navbar = () => {
  return (
    <>
      <nav className="topnav" id="myTopnav">
        
        <div className="logo"><img src={Logo} alt="Logo" className="logo"/></div>

        <ul className="navbar-menu">
          <li className="nav-item active">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
