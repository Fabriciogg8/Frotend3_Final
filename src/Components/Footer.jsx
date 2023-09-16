import React from 'react';
import '../Stylesheets/foot.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Powered by</p>
      <img className="footer-img" src="./images/DH.png" alt='DH-logo' />
      <img className="footer-img-logo" src="./images/ico-facebook.png" alt='facebook' />
      <img className="footer-img-logo" src="./images/ico-instagram.png" alt='instagram' /> 
      <img className="footer-img-logo" src="./images/ico-tiktok.png" alt='tiktok' />
      <img className="footer-img-logo" src="./images/ico-whatsapp.png" alt='whatsapp' />  
    </footer>
  )
}

export default Footer;
