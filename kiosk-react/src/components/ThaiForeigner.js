// React Component
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Styles/ThaiForeigner.css';

import StoredData from './StoredData/StoredData'; // Import StoredData
import thaipeople from './images/thaipeople.png';
import foreignerpeople from './images/foreignerpeople.png';

const ThaiForeigner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (path, userType) => {
    StoredData.set('userType', userType); // Store userType in localStorage
    navigate(path);
  };

  return (
    <div className="thai-container">
      <div
        className="torfcard thai-card"
        onClick={() => handleNavigate('/enter-id-thai', 'Thai')} // Pass 'Thai' as userType
      >
        <img src={thaipeople} alt={t('thai')} className="tofcard-image" />
        <div className="torfcard-content">
          <h2>{t('thai')}</h2>
        </div>
      </div>
      <div
        className="torfcard foreigner-card"
        onClick={() => handleNavigate('/enter-id-passport', 'Foreigner')} // Pass 'Foreigner' as userType
      >
        <img src={foreignerpeople} alt={t('foreigner')} className="tofcard-image" />
        <div className="torfcard-content">
          <h2>{t('foreigner')}</h2>
        </div>
      </div>
    </div>
  );
};

export default ThaiForeigner;
