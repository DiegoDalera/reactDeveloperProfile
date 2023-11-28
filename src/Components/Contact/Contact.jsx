import "./Contact.css";

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_4j0epyr', 'template_07ipcom', form.current, 'x_qraMb1xSTrBxKT6')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); 
          Swal.fire("Email enviado con éxito");
      }, (error) => {
          console.log(error.text);
      });
  };


  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="contact" >
      <div className="contact-title">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-form" data-aos="zoom-in-up">
        
        <form
        ref={form} onSubmit={sendEmail}
          id="contact-form"
          action="mail.php"
          method="post"
          className="contact-form bg-white"
        >
  

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="user_name"
                required=""
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="user_email"
                required=""
                placeholder="Email"
              />
            </div>
  

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              required=""
              placeholder="Subject"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              id=""
              className="form-control"
              required=""
              placeholder="Message"
              data-lt-tmp-id="lt-591898"
              spellCheck="false"
              data-gramm="false"
            ></textarea>
          </div>

          <div className="form-btn text-center">
            <button className="button" type="submit" value="Send">
              Enviar
            </button>
            <p className="form-message"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
