import React from 'react'

import facebook from '../images/Facebook Icon.png'
import instagram from '../images/Instagram Icon.png'
import github from '../images/GitHub Icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://www.facebook.com/MrRoqueBoy/" target='_blank'>
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/jmvroqueee/" target='_blank'>
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/Marveeeen/" target='_blank'>
        <img src={github} alt="github" />
      </a>
    </div>
  )
}

export default Footer