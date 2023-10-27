import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-form">
        
        <form
          id="contact-form"
          action="mail.php"
          method="post"
          class="contact-form bg-white"
        >
          <div class="row">
            <div class="col-lg-6 form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                required=""
                placeholder="Name"
              />
            </div>
            <div class="col-lg-6 form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                required=""
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="subject"
              required=""
              placeholder="Subject"
            />
          </div>

          <div class="form-group">
            <textarea
              name="message"
              id=""
              class="form-control"
              required=""
              placeholder="Message"
              data-lt-tmp-id="lt-591898"
              spellcheck="false"
              data-gramm="false"
            ></textarea>
          </div>

          <div class="form-btn text-center">
            <button class="button" type="submit">
              Send Message
            </button>
            <p class="form-message"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
