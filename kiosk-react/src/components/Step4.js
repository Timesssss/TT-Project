import React from 'react';
import './Styles/Step4.css';
import { useTranslation } from 'react-i18next';

const Step4 = () => {
  const { t } = useTranslation();

  return (
    <div className="steps4-container">
      <div className="step4-box">
        <div className="step4-content">
          <span className="step4-number">01</span>
          <span className="step4-text">{t('step_1')}</span>
        </div>
      </div>
      <div className="step4-box">
        <div className="step4-content">
          <span className="step4-number">02</span>
          <span className="step4-text">{t('step_2')}</span>
        </div>
      </div>
      <div className="step4-box">
        <div className="step4-content">
          <span className="step4-number">03</span>
          <span className="step4-text">{t('step_3')}</span>
        </div>
      </div>
      <div className="step4-box">
        <div className="step4-content">
          <span className="step4-number">04</span>
          <span className="step4-text">{t('step_4')}</span>
        </div>
      </div>
    </div>
  );
};

export default Step4;
