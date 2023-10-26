import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <nav className="topnav" id="myTopnav">
        <div className="logo"><img src={Logo} alt="Logo" className="logo"/></div>
        <ul className="navbar-menu">
          {["home", "about", "skills", "portfolio", "contact"].map(section => (
            <li className={`nav-item ${activeSection === section ? "active" : ""}`} key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(section)}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
