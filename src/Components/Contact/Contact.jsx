import "./Contact.css";

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

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
          id="contact-form"
          action="mail.php"
          method="post"
          className="contact-form bg-white"
        >
  

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                required=""
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
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
            <button className="button" type="submit">
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
