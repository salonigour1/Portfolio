import React from 'react';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaRegAddressCard } from 'react-icons/fa6';
import '../scss/Homepage.scss';
import '../scss/components/Footer.scss';
import Socials from './Socials';
function Footer({ sectionRef }) {
  const handleSubmit = () => {};
  console.log(sectionRef);
  return (
    <>
      <footer>
        <div className='topbox'>
          <div className='message__left'>
            <div className='message_form'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='message__form__name'>
                    <label>Name</label>
                    <br />
                    <input type='text' />
                  </div>
                  <div className='message__form__email'>
                    <label>Email</label> <br />
                    <input type='text' />
                  </div>
                </div>
                <div className='message__form__textarea'>
                  <label>Message</label> <br />
                  <textarea></textarea>
                </div>
                <div className='buttons'>
                  <button type='submit' className='sendme'>
                    Send Message
                  </button>
                  <button className='clear'>Clear</button>
                </div>
              </form>
            </div>
          </div>
          <div className='message__right'>
            <div className='message--item'>
              <div className='icons'>
                <IoIosMail size='30px' padding='3px' />
                <span>Email</span>
              </div>
              <div className='details--style'>salonigour02100@gmail</div>
            </div>
            <div className='message--item'>
              <div className='icons'>
                <IoCall size='30px' />
                <span>Contact Number</span>
              </div>
              <div className='details--style'>9131520346</div>
            </div>
            <div className='message--item'>
              <div className='icons'>
                <FaRegAddressCard size='30px' />
                <span>Address</span>
              </div>

              <div className='details--style'>
                Godrej Colony, Hinjawadi, Pune, Maharasthra
              </div>
            </div>
          </div>
        </div>
        <Socials />
        <div className='copyrights'>©Saloni Gour. All Rights Reserved</div>
      </footer>
    </>
  );
}

export default Footer;
