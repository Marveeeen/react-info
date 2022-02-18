import React from 'react'
import picture from '../images/Roque.jpg'
import email from '../images/Mail.png'
import linkedin from '../images/linkedin.png'

const Info = () => {
  return (
    <>
      <img src={picture} alt='Marvin Roque' className='img-info' />
      <div className='main'>
        <h3 className='name-info'>John Marvin Roque</h3>
        <h4 className='title-info'>Frontend Developer</h4>
        <a href='https://marvin-roque-portfolio.vercel.app/' target='_blank'><h5 className='website-info'>Marvin's Portfolio</h5></a>
        <div className='buttons'>
          <a href='mailto:jmvroqueee@gmail.com' tart='_blank'>
            <button className='email-info' type='button'>
            <img src={email} alt='email' className='icon'></img> <span className='email-label'>Email</span>
            </button>
          </a>
          <a href='https://www.linkedin.com/in/john-marvin-roque-61a0441b2/' target='_blank'>
            <button className='linkedin-info'> 
              <img src={linkedin} alt='linkedin' className='icon'></img> <span className='linkedin-label'>LinkedIn
            </span></button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Info