import React from 'react';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaRegAddressCard } from 'react-icons/fa6';
import '../scss/Homepage.scss';
import '../scss/components/Footer.scss';
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
        {/* <div className='footer--top'>
          <div className='message message--first'>
            <form onSubmit={handleSubmit}>
              <div className='message__form'>
                <div className='message__form--row'>
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
              </div>
              <button type='submit'>Send Message</button>
              <button>Clear</button>
            </form>
          </div>
          <div className='message-form--second'>
            <div>
              <IoIosMail />
              <span>Email</span>
              <div>salonigour02100@gmail</div>
            </div>
            <div>
              <IoCall />
              <span>Contact Number</span>
              <div>9131520346</div>
            </div>
            <div>
              <FaRegAddressCard />
              <span>Address</span>
              <div>Godrej Colony, Hinjawadi, Pune, Maharasthra</div>
            </div>
          </div>
        </div> */}
        <div className='socials'>
          <div className='social-icons'>
            <a
              href='https://www.linkedin.com/in/saloni-gour-556ba2243/'
              target='_blank'
            >
              <FaLinkedin color='white' size='25px' />
            </a>
          </div>
          <div className='social-icons'>
            <a href='https://github.com/salonigour1' target='_blank'>
              <FaGithub color='white' size='25px' />
            </a>
          </div>
          <div className='social-icons'>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=salonigour02100@gmail.com'
              target='_blank'
            >
              <IoIosMail color='white' size='25px' />
            </a>
          </div>
          <div className='social-icons'>
            <a href='https://twitter.com/tia97973' target='_blank'>
              <BsTwitterX color='white' size='25px' />
            </a>
          </div>
        </div>
        <div className='copyrights'>©Saloni Gour. All Rights Reserved</div>
      </footer>
    </>
  );
}

export default Footer;
