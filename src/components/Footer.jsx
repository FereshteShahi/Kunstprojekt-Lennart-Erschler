import React from 'react';
import '../css/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); 
  
  return (
    <div className='footer main-container'>
      <p className='p-footer'>© {currentYear} Lennart Erschler. Alle Rechte vorbehalten.</p>
      <div className='footer-links'>
        <a href="/datenschutz">Datenschutz</a>
        <span className="slash">/</span>
        <a href="/impressum">Impressum</a>
      </div>
    </div>
  );

}

export default Footer;
