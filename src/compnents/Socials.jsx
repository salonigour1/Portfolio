import React from 'react';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaRegAddressCard } from 'react-icons/fa6';
function Socials() {
  return (
    <>
      <div className='socials'>
        <div className='social-icons'>
          <a
            href='https://www.linkedin.com/in/saloni-gour-556ba2243/'
            target='_blank'
          >
            <FaLinkedin color='white' size='40px' />
          </a>
        </div>
        <div className='social-icons'>
          <a href='https://github.com/salonigour1' target='_blank'>
            <FaGithub color='white' size='40px' />
          </a>
        </div>
        <div className='social-icons'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=salonigour02100@gmail.com'
            target='_blank'
          >
            <IoIosMail color='white' size='40px' />
          </a>
        </div>
        <div className='social-icons'>
          <a href='https://twitter.com/tia97973' target='_blank'>
            <BsTwitterX color='white' size='40px' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Socials;
