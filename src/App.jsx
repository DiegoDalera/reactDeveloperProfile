import { useState } from "react";
import { Link, Element } from "react-scroll";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import PortfolioBoot from "./Components/PortfolioBoot/PortfolioBoot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="main">
        <Element name="home">
          <Header />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="portfolio">
          <PortfolioBoot />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;
