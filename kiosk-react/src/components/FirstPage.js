import React, { useState } from 'react';
import './Styles/FirstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import insertCardVideo from './video/insertCard.mp4';

const FirstPage = () => {
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      navigate('/thai-or-foreigner'); // Navigate to the ThaiForeigner page
    }, 1000);
  };

  return (
    <div className="wel-container">
      <div className="wel-card">
        <h2>{t('insert_card')}</h2>
        <video
          className="card-video"
          autoPlay
          loop
          muted
          playsInline
          src={insertCardVideo}
          alt="Card video"
        ></video>
      </div>
      <div className="or-text">{t('or_text')}</div>
      <button
        className={`exit-button ${isClicked ? 'active' : ''}`}
        onClick={handleClick}
      >
        {t('queue_button')}
        <FontAwesomeIcon icon={faHandPointer} className="exit-icon" />
      </button>
    </div>
  );
};

export default FirstPage;
