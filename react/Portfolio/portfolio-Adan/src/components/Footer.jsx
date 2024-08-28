import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='contenedor_futer'>
      <div className='footer'>
      <div>
       <p>© 2024 Mi Sitio Web</p>
      </div>
      <div className='Central-texto'>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF size={30} color="#4267B2" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={30} color="#C13584" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter size={30} color="#1DA1F2" />
      </a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp size={30} color="#25D366" />
      </a>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
