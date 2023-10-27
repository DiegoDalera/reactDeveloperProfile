import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // puedes ajustar este valor según tus necesidades
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`topnav ${scrolled ? "scrolled" : ""}`}  id="myTopnav">
        <div className="logo">
          
        </div>
        <ul className="navbar-menu">
          {["home", "about", "skills","services", "portfolio", "contact"].map(
            (section) => (
              <li
                className={`nav-item ${
                  activeSection === section ? "active" : ""
                }`}
                key={section}
              >
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
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
