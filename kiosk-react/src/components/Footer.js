import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
    setIsActive(!isActive);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>{t('version')}</p>
        </div>
        <div className="footer-right">
          <button
            className={isActive ? 'active' : ''}
            onClick={toggleLanguage}
          >
            EN/TH
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
