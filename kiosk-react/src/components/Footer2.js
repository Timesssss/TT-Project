import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Footer2.css';
import { useTranslation } from 'react-i18next';

const Footer2 = () => {
  const { i18n, t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
    setIsActive(!isActive);
  };

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <footer className="footer2">
      <div className="footer2-content">
        <div className="footer2-left">
          <button className="back-button" onClick={handleBack}>
            {t('back')}
          </button>
        </div>
        <div className="footer2-right">
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

export default Footer2;
