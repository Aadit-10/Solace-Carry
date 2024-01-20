
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ojtp96t', 'template_iqu0ejz', form.current, 'NENEPoSdvmKxjGLTF')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className=''>
      <input type="text" placeholder='Moving from*' class="grid-item " name='movingfrom'required />
      <input type="text" placeholder='Moving to*' class="grid-item " name='movingto'required />
    </div>

    <div>
      <input type="text" placeholder='Full Name*'class="grid-item " name='fullname' required />
      <input type="email" placeholder='Email*' class="grid-item " name='email' required />
    </div>
    
    <div>
      <input type="date" placeholder='Moving-Date*' class="grid-item "name='date' required />
      <input type="number" placeholder='Phone Number*' class="grid-item " name='phonenumber' required />
    </div>

    <div>
       <input type="text"placeholder='Description' class="grid-item des " id="description"  name='description' required/>
    </div>
    <div>
      <input type="submit" class="grid-item es" value="Send"/>
    </div>
    </form>
  );
};
export default Contact;