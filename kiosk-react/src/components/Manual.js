import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import StoredData from './StoredData/StoredData';
import './Styles/Manual.css';

import welfareIcon from './images/welfare-icon.png';
import payIcon from './images/pay-icon.png';

const Manual = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate(); // Initialize navigation hook

  // Handle payment method selection
  const handleManual = (method) => {
    navigate('/queue'); // Navigate to the confirm page
  };

  return (
    <div className="manual-container">
      <div
        className="hn-card"
        onClick={() => handleManual('มีหนังสือส่งตัว/สิทธิยังไม่หมดอายุ')}
      >
        <img src={welfareIcon} alt={t('transferImg')} className="hn-image" />
        <div className="hn-content">
          <h2>{t('havehn')}</h2>
        </div>
      </div>
      <div
        className="nohn-card"
        onClick={() => handleManual('ชำระเงินเอง')}
      >
        <img src={payIcon} alt={t('payImg')} className="nohn-image" />
        <div className="nohn-content">
          <h2>{t('nohn')}</h2>
        </div>
      </div>
    </div>
  );
};

export default Manual;
