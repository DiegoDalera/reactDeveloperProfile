import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Spinner from "./Components/Spinner/Spinner";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
       <Spinner loading={loading} /> 
      ) : (
        <div>
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
            <Element name="Service">
              <Services />
            </Element>
            <Element name="portfolio">
              <Portfolio />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


