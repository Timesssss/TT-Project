import React from 'react';
import './Styles/Step1.css';
import { useTranslation } from 'react-i18next';

const Step1 = () => {
  const { t } = useTranslation();

  return (
    <div className="steps1-container">
      <div className="step1-box">
        <div className="step1-content">
          <span className="step1-number">01</span>
          <span className="step1-text">{t('step_1')}</span>
        </div>
      </div>
      <div className="step1-box">
        <div className="step1-content">
          <span className="step1-number">02</span>
          <span className="step1-text">{t('step_2')}</span>
        </div>
      </div>
      <div className="step1-box">
        <div className="step1-content">
          <span className="step1-number">03</span>
          <span className="step1-text">{t('step_3')}</span>
        </div>
      </div>
      <div className="step1-box">
        <div className="step1-content">
          <span className="step1-number">04</span>
          <span className="step1-text">{t('step_4')}</span>
        </div>
      </div>
    </div>
  );
};

export default Step1;
