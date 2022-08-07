import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { GrFacebook , GrGithub , GrLinkedin , GrTwitter} from "react-icons/gr";
import { FiPhone , FiMail } from "react-icons/fi";
import { AiFillInstagram} from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <MDBFooter className='text-center mt-5' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/tarkhala.natha' role='button'>
               <GrFacebook></GrFacebook>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/NathaTarkhala' role='button'>
            <GrTwitter></GrTwitter>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/nick___tarkhala/' role='button'>
            <AiFillInstagram></AiFillInstagram>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/natha-tarkhala-966a56235/' role='button'>
            <GrLinkedin></GrLinkedin>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Natha6515' role='button'>
            <GrGithub></GrGithub>            
          </MDBBtn>
        </section>

        <section className='row'>
            <div className='col-12'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <NavLink exact to="/journey" className='text-white text-decoration-none'>
                    Journey
                  </NavLink>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <NavLink exact to="/skills" className='text-white text-decoration-none'>
                    Skills
                  </NavLink>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <NavLink exact to="/aboutme" className='text-white text-decoration-none'>
                    About Me
                  </NavLink>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <NavLink exact to="/contact" className='text-white text-decoration-none'>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0 mt-lg-2 mt-md-2'>
                <li>
                  <NavLink exact to="/aboutme" className='text-white text-decoration-none'>
                   <FiPhone className='mr-1'></FiPhone>
                    +91 9328013101
                  </NavLink>
                </li>
              </ul>
              </MDBCol> 

            <MDBCol lg='3' md='' className=''></MDBCol>
            <MDBCol lg='3' md='' className='mb-md-0'></MDBCol>

              
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              
              <ul className='list-unstyled mb-0 mt-lg-2 mt-md-2'>
                <li>   
                  <a href="mailto:tarkhalanatha6515@gmail.com" className='text-white text-decoration-none'>
                   <FiMail className='mr-0'></FiMail> tarkhalanatha6515@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>


          </MDBRow>
          </div>
        </section>
  

      </MDBContainer>

      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright
      </div>
    </MDBFooter>
  );
}

export default Footer;