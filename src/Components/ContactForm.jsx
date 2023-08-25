import React from 'react';
import Image3 from "../media/img3.jpg";
import "./ContactFormstyle.css";

function ContactForm() {
return (
  <>
  <div className="front4">
      <div className="mask4">
        <img className="bgImg2" src={Image3} alt="backgroundImage" />
      </div>
      <div id='outerDiv'>
      <div className='content4'>
      <form>
          <h2 style={{textAlign:"center",textDecoration:"underline"}}>If you have any questions, fill this form</h2>
          <label for="fname">First Name</label>
          <input type="text" className="name" name="firstname" placeholder="Write"/>

          <label for="lname">Last Name</label>
          <input type="text" className="name" name="lastname" placeholder="Write"/>

          <label for="email">Email</label>
          <input type="mail" className="name"  placeholder="Type yor mail id"/>
          <p id="disclaimer">*Your email will not be shared with anyone</p>

          <label for="country">Country</label>
          <input type="text" className="name"  placeholder="Enter your country's name"/>
          

          <label for="subject">Write what you want from me?</label>
          <textarea id="subject" name="subject" placeholder="Write your query or question"></textarea>

          <input type="submit" value="Submit" id="sbtn"/>

      </form>
      </div>
      </div>
  </div>
    </>
  )
}

export default ContactForm