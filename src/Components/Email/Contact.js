import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      }),
      {
        pending: 'Sending Email...',
        success: 'Email Sent',
        error: 'Email Not Sent',
      },
      {}
    );
  };

  const notnotify = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 3000);
      }),
      {
        pending: 'Sending Email...',
        success: 'Email Sent',
        error: 'Email Not Sent',
      },
      {}
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ojtp96t',
        'template_iqu0ejz',
        form.current,
        'NENEPoSdvmKxjGLTF'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log('message sent');
          notify();
        },
        (error) => {
          console.log(error.text);
          notnotify();
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className=''>
        <input
          type='text'
          placeholder='Moving from*'
          className='grid-item '
          name='movingfrom'
          required
        />
        <input
          type='text'
          placeholder='Moving to*'
          className='grid-item '
          name='movingto'
          required
        />
      </div>

      <div>
        <input
          type='text'
          placeholder='Full Name*'
          className='grid-item '
          name='fullname'
          required
        />
        <input
          type='email'
          placeholder='Email*'
          className='grid-item '
          name='email'
          required
        />
      </div>

      <div>
        <input
          type='date'
          placeholder='Moving-Date*'
          className='grid-item '
          name='date'
          required
        />
        <input
          type='number'
          placeholder='Phone Number*'
          className='grid-item '
          name='phonenumber'
          required
        />
      </div>

      <div>
        <input
          type='text'
          placeholder='Description'
          className='grid-item des '
          id='description'
          name='description'
          required
        />
      </div>

      <div>
        <input type='submit' className='grid-item es' value='Send' />
        <ToastContainer
          transition={Zoom}
          theme='light'
          position={'top-right'}
          autoClose={3000}
          closeOnClick={true}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          draggable={true}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
        />
      </div>
    </form>
  );
};

export default Contact;
