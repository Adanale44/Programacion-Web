import React from 'react';
import instagramIcon from '../assets/iconos/instagram.png';
import gmailIcon from '../assets/iconos/gmma.png';
import twitterIcon from '../assets/iconos/twitterç.png';
import sappIcon from '../assets/iconos/wps.png';


const Footer = () => {
  return (
    <footer className='contenedor_futer'>
      <p>© 2024 Mi Sitio Web</p>
      <div className='contenedor_futer'>
        <a href="https://Youtube.com" aria-label="Whatsapp">
          <img src={sappIcon} alt="Whatsapp" className='contenedor_img'/>
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className='contenedor_img'/>
        </a>
        <a href="https://gmail.com" aria-label="Email">
          <img src={gmailIcon} alt="Email" className='contenedor_img'/>
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className='contenedor_img'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
