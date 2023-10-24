import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <form action="">
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <label class="form-group">
            <input type="text" class="form-control" required=""/>
            <span>Your Name</span>
            <span class="border"></span>
            </label>
            <label class="form-group">
            <input type="text" class="form-control" required=""/>
            <span for="">Your Mail</span>
            <span class="border"></span>
            </label>
            <label class="form-group">
            <textarea name="" id="" class="form-control" required="" data-lt-tmp-id="lt-950560" spellcheck="false" data-gramm="false"></textarea>
            <span for="">Your Message</span>
            <span class="border"></span>
            </label>
            <button>Submit
            <i class="zmdi zmdi-arrow-right"></i>
            </button>
</form>




    </div>
  )
}

export default Contact