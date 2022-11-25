import React from 'react'
import { Link } from "react-router-dom";
import { SocialIcon } from 'atoms';
import "./style.scss";

export const Footer = () => {
  return (
    <footer>
      <div className='copyright'>Design by Alexander Shepherd</div>
      <div className='social-links'>
          <Link to="/"><SocialIcon type="facebook"/></Link>
          <Link to="/"><SocialIcon type="youtube"/></Link>
          <Link to="/"><SocialIcon type="instagram"/></Link>
          <Link to="/"><SocialIcon type="twitter"/></Link>
          <Link to="/"><SocialIcon type="vkontakte"/></Link>
      </div>
    </footer>
  )
}
